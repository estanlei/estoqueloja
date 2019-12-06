
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

namespace ESO.ESOESCOLA.DAL.Generic
{
    public class GenericDAO<T>  where T : class
    {
        public DbContext DbContext { get; set; }

        public virtual IQueryable<T> GetAll()
        {
            return DbContext.Set<T>();
        }


        public virtual T Get(params object[] key)
        {
            return DbContext.Set<T>().Find(key);
        }

        public virtual T Find(Expression<Func<T, bool>> match)
        {
            return DbContext.Set<T>().SingleOrDefault(match);
        }

        public virtual T FindFirst()
        {
            return DbContext.Set<T>().SingleOrDefault();
        }

        public virtual IQueryable<T> FindAll(Expression<Func<T, bool>> filter,
                                                Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
                                                string includeProperties = null)
        {
            IQueryable<T> query = this.GetAll();

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (!string.IsNullOrWhiteSpace(includeProperties))
            {
                foreach (var includeProperty in includeProperties.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProperty);
                }
            }

            if (orderBy != null)
            {
                return orderBy(query);
            }

            return query;
        }

        /// <summary>
        /// Método retorna se existe algum registro que corresponda a cláusula Where fornecida
        /// </summary>
        /// <param name="match">Cláusula Where a ser comparada</param>
        /// <returns>boolean</returns>
        public virtual bool Exists(Expression<Func<T, bool>> match)
        {
            return DbContext.Set<T>().Where(match).Any();
        }

        public virtual void Save(T entity)
        {
            if (entity != null)
            {
                try
                {
                    var context = ((IObjectContextAdapter)DbContext).ObjectContext;
                    ObjectStateEntry stateEntry = null;

                    context.ObjectStateManager.TryGetObjectStateEntry(entity, out stateEntry);

                    var objectSet = context.CreateObjectSet<T>();
                    if (stateEntry == null || stateEntry.EntityKey.IsTemporary)
                    {
                        objectSet.AddObject(entity);
                    }

                    else if (stateEntry.State == EntityState.Detached)
                    {
                        objectSet.Attach(entity);
                        context.ObjectStateManager.ChangeObjectState(entity, EntityState.Modified);
                    }
                    DbContext.SaveChanges();
                }
                catch (DbEntityValidationException e)
                {

                    var erros = "";

                    foreach (var eve in e.EntityValidationErrors)
                    {
                        foreach (var ve in eve.ValidationErrors)
                        {
                            erros += $"Entidade: \"{ve.PropertyName}\", Erro: \"{ve.ErrorMessage}\"";
                        }
                    }

                    throw new ApplicationException($"Mensagem:{erros}");

                }
                catch (Exception ex)
                {
                    throw new ApplicationException($"Ocorreu um erro não tratado.\tMensagem:{ex.Message}\tInnerException:{ex?.InnerException?.InnerException?.Message}");
                }
            }
        }

        public virtual void Delete(object id)
        {
            T entityToDelete = Get(id);
            Delete(entityToDelete);
        }

        public virtual void Delete(T entity)
        {
            if (entity != null)
            {
                try
                {
                    if (DbContext.Entry(entity).State == EntityState.Detached)
                    {
                        DbContext.Set<T>().Attach(entity);
                    }
                    DbContext.Set<T>().Remove(entity);
                    DbContext.SaveChanges();
                }
                catch (Exception ex)
                {
                    throw new ApplicationException($"Ocorreu um erro não tratado.\tMensagem:{ex.Message}\tStackTrace:{ex.StackTrace}");
                }
            }
        }

        //public async Task<int> DeleteAsync(T t)
        //{
        //    _context.Set<T>().Remove(t);
        //    return await _context.SaveChangesAsync();
        //}

        public virtual int Count()
        {
            return DbContext.Set<T>().Count();
        }

        //public async Task<int> CountAsync()
        //{
        //    return await _context.Set<T>().CountAsync();
        //}

        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    DbContext.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            //GC.SuppressFinalize(this);
        }

    }

}

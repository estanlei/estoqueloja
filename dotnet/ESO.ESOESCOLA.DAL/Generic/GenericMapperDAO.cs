
using AutoMapper;
using System.Reflection;
using System.Data.Entity;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using ESO.FRAMEWORK.MapperConfig;
using System;
using ESO.FRAMEWORK.Base.Business;

namespace ESO.ESOESCOLA.DAL.Generic
{
    public class GenericMapperDAO<T, D, Id>  where T : class
    {
        private const BindingFlags flags = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Default | BindingFlags.FlattenHierarchy | BindingFlags.Public;
        private const BindingFlags publicFlags = BindingFlags.Instance | BindingFlags.Default | BindingFlags.FlattenHierarchy | BindingFlags.Public;

        public DbContext db;
        public Mapper mapper { get; set; }
        public GenericMapperDAO(string contexto)
        {
            db = new DbContext(contexto);

            this.Init();
        }

        public void Init()
        {
            mapper = AutoMapperConfig.MapperConfig.mapper;
        }
 
        public virtual T Update(D source)
        {
            T obj = ToModel(source);

            db.Entry(obj).State = EntityState.Modified;
            db.SaveChanges();
            return obj;
        }
        public virtual T GetFromRegistry(D obj,  params string[] nameId)
        {
            object[] ids = new object[nameId.Length];

            if (nameId != null && nameId.Length > 0)
            {
                int index = 0;
                foreach (var idObj in nameId)
                {
                    ids[index] = this.GetPropertyValue(obj);
                    index++;
                }
            }
            else
            {
                ids =  this.GetPropertyValue(obj);
            }

            T objEntry = db.Set<T>().Find(ids);

            return objEntry;
        }


        public virtual T Merge(D source)
        {
            T obj = ToModel(source);

            var olderObj = GetFromRegistry(source);
            var entry = db.Entry(olderObj);
            entry.CurrentValues.SetValues(obj);
            entry.State = EntityState.Modified;
            db.SaveChanges();

            return obj;
        }
        public virtual T Save(D source)
        {
            T obj = ToModel(source);

            var context = ((IObjectContextAdapter)db).ObjectContext;
            ObjectStateEntry stateEntry = null;

            context.ObjectStateManager.TryGetObjectStateEntry(obj, out stateEntry);

            var objectSet = context.CreateObjectSet<T>();
            if (stateEntry == null || stateEntry.EntityKey.IsTemporary)
            {
                objectSet.AddObject(obj);
            }

            else if (stateEntry.State == EntityState.Detached)
            {
                objectSet.Attach(obj);
                context.ObjectStateManager.ChangeObjectState(obj, EntityState.Modified);
            }


            db.SaveChanges();
            return obj;
        }
        public virtual D ToDTO(T entityModel)
        {
            return mapper.Map<T, D>(entityModel);
        }
        public T ToModel(D dto)
        {
            return mapper.Map<D, T>(dto);
        }
        public IList<D> ToDTO(IList<T> entityModel)
        {
            return mapper.Map<IList<T>, IList<D>>(entityModel);
        }
        public IList<D> ToDTO(IEnumerable<T> entityModel)
        {
            return mapper.Map<IEnumerable<T>, IList<D>>(entityModel);
        }
        public IList<T> ToModel(IList<D> dto)
        {
            return mapper.Map<IList<D>, IList<T>>(dto);
        }
        public IList<T> ToModel(IEnumerable<D> dto)
        {
            return mapper.Map<IList<D>, List<T>>(new List<D>(dto));
        }

        public object[] GetPropertyValue(D source)
        {
            
            var fields = source.GetType();
   
            System.Attribute[] attrs = System.Attribute.GetCustomAttributes(fields);  // Reflection.  

            object[] ids = new object[attrs.Length];

            var obj = source.GetType();

            // Displaying output.  
            foreach (System.Attribute attr in attrs)
            {
                if (attr is GenericBLL)
                {
                    GenericBLL a = (GenericBLL)attr;
                    var index  = 0;
                    foreach (var item in a.PrimaryKey)
                    {

                        ids[index] = obj.GetProperty(item).GetValue(source);

                        index++;
                    }
                }
            }

            return ids;
        }

    }
}

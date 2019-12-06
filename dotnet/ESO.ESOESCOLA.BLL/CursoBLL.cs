
using System;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Comum;
using System.Collections.Generic;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.BLL
{
    public class CursoBLL
    {
        protected CursoDAL dao { get; set; }
        public CursoBLL()
        {
            dao = new CursoDAL();
        }
        public CursoDTO Buscar(int id)
        {
            return null;
        }
        public IList<CursoDTO> Listar(FiltroDTO queryStr)
        {
            return dao.Listar(queryStr);
        }
        public void Salvar(CursoDTO entity)
        {

           // entity.DATA_INCLUSAO = DateTime.Now;
            dao.Save(entity);
        }
    }
}


using System;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Comum;
using System.Collections.Generic;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.BLL
{
    public class EmpresaBLL
    {
        protected EmpresaDAL dao { get; set; }
        public EmpresaBLL()
        {
            dao = new EmpresaDAL();
        }
        public EmpresaDTO Buscar(int id)
        {
            return null;
        }
        public IList<EmpresaDTO> Listar(FiltroDTO queryStr)
        {
            return dao.Listar(queryStr);
        }
        public void Salvar(EmpresaDTO entity)
        {

            //entity.DATA_INCLUSAO = DateTime.Now;
            dao.Save(entity);
        }
    }
}

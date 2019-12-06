
using System;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Comum;
using System.Collections.Generic;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.BLL
{
    public class TurmaBLL // : GenericService<EXAME, ExameDTO, int>
    {
        protected TurmaDAL dao { get; set; }
        public TurmaBLL()
        {
            dao = new TurmaDAL();
        }
        public TurmaDTO Buscar(int id)
        {
            return dao.Buscar(id); ;
        }
        public IList<TurmaDTO> Listar(FiltroDTO queryStr)
        {
            return dao.Listar(queryStr);
        }
        public void Salvar(TurmaDTO entity)
        {

            entity.DATA_INCLUSAO = DateTime.Now;
            dao.Save(entity);
        }


    }
}

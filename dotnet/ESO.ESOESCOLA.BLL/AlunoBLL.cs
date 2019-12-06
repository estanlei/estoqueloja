
using System;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Comum;
using System.Collections.Generic;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.BLL
{
    public class AlunoBLL
    {
        protected AlunoDAL dao { get; set; }
        public AlunoBLL()
        {
            dao = new AlunoDAL();
        }
        public AlunoDTO Buscar(int id)
        {
            return null;
        }
        public IList<AlunoDTO> Listar(FiltroDTO queryStr)
        {
            return dao.Listar(queryStr);
        }
        public void Salvar(AlunoDTO entity)
        {

            entity.DATA_INCLUSAO = DateTime.Now;
            dao.Save(entity);
        }


    }
}

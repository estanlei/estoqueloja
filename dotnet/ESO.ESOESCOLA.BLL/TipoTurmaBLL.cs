
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Comum;
using System.Collections.Generic;


namespace ESO.ESOESCOLA.BLL
{
    public class TipoTurmaBLL
    {
        protected TipoTurmaDAL dao { get; set; }
        public TipoTurmaBLL()
        {
            dao = new TipoTurmaDAL();
        }
        public TipoTurmaDTO Buscar(int id)
        {
            return dao.Buscar(id); ;
        }
        public IList<TipoTurmaDTO> Listar(string queryStr)
        {
            return dao.Listar(queryStr);
        }
        public void Salvar(TipoTurmaDTO entity)
        {
            dao.Save(entity);
        }

    }
}

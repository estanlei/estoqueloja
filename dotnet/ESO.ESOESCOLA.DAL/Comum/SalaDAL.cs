using System.Linq;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Generic;
using System.Collections.Generic;
using ESO.ESOESCOLA.DAL.Repositorio;


namespace ESO.ESOESCOLA.DAL.Comum
{
    public class SalaDAL : GenericMapperDAO<SALA, SalaDTO, int>
    {
        public esoensinoEntities db;
        public SalaDAL() : base("esoensinoEntities")
        {
            db = new esoensinoEntities();
        }
        public SalaDTO Buscar(int id)
        {

            var query = (from p in db.SALA
                         where (p.SAL_ID == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<SalaDTO> Listar(string queryStr)
        {

            var query = (from p in db.SALA
                         where (p.EMP_ID == 1) &&
                               (queryStr == null ||
                               (p.SAL_DESCRICAO.Contains(queryStr)))
                         select p);


            return ToDTO(query);

        }
    }
}

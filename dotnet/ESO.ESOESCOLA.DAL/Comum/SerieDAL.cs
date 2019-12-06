using System.Linq;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Generic;
using System.Collections.Generic;
using ESO.ESOESCOLA.DAL.Repositorio;



namespace ESO.ESOESCOLA.DAL.Comum
{
    public class SerieDAL : GenericMapperDAO<SERIE, SerieDTO, int>
    {
        public esoensinoEntities db;
        public SerieDAL() : base("esoensinoEntities")
        {
            db = new esoensinoEntities();
        }
        public SerieDTO Buscar(int id)
        {

            var query = (from p in db.SERIE
                         where (p.SER_ID == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<SerieDTO> Listar(string queryStr)
        {

            var query = (from p in db.SERIE
                         where (queryStr == null ||
                               (p.SER_DESCRICAO.Contains(queryStr)))
                         select p);


            return ToDTO(query);

        }
    }
}

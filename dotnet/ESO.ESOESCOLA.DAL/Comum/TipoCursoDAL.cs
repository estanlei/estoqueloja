using System.Linq;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Generic;
using System.Collections.Generic;
using ESO.ESOESCOLA.DAL.Repositorio;


namespace ESO.ESOESCOLA.DAL.Comum
{
    public class TipoCursoDAL : GenericMapperDAO<TIPO_CURSO, TipoCursoDTO, int>
    {
        public esoensinoEntities db;
        public TipoCursoDAL() : base("esoensinoEntities")
        {
            db = new esoensinoEntities();
        }
        public TipoCursoDTO Buscar(int id)
        {

            var query = (from p in db.TIPO_CURSO
                         where (p.TIP_CUR_ID == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<TipoCursoDTO> Listar(string queryStr)
        {
            var query = (from p in db.TIPO_CURSO
                         where  (queryStr == null ||
                               (p.TIP_CUR_DESCRICAO.Contains(queryStr)))
                         select p);


            return ToDTO(query);

        }
    }
}

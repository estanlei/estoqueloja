using System.Linq;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Generic;
using System.Collections.Generic;
using ESO.ESOESCOLA.DAL.Repositorio;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.DAL.Comum
{
    public class CursoDAL : GenericMapperDAO<CURSO, CursoDTO, int>
    {
        public esoensinoEntities db;
        public CursoDAL() : base("esoensinoEntities")
        {
            db = new esoensinoEntities();
        }
        public CursoDTO Buscar(int id)
        {

            var query = (from p in db.CURSO
                         where (p.CUR_ID == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<CursoDTO> Listar(FiltroDTO queryStr)
        {

            var query = (from p in db.CURSO
                         where (p.EMP_ID == 1) &&                               
                               (queryStr.CUR_NOME == null ||
                               (p.CUR_NOME.StartsWith(queryStr.CUR_NOME)))
                         select p);


            return ToDTO(query);

        }
    }
}

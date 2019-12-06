
using System.Linq;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Generic;
using System.Collections.Generic;
using ESO.ESOESCOLA.DAL.Repositorio;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.DAL.Comum
{
    public class TurmaDAL : GenericMapperDAO<TURMA,TurmaDTO,int>
    {
        public esoensinoEntities db;
        public TurmaDAL() : base("esoensinoEntities")
        {
            db = new esoensinoEntities();
        }
        public TurmaDTO Buscar(int id)
        {
            
            var query = (from p in db.TURMA
                         where (p.TUR_ID == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<TurmaDTO> Listar(FiltroDTO queryStr)
        {

            var query = (from p in db.TURMA
                         where (p.EMP_ID == 1) &&
                               (queryStr.PER_ID == 0 || p.PER_ID == queryStr.PER_ID) &&
                               (queryStr.CUR_ID == 0 || p.CUR_ID == queryStr.CUR_ID) &&
                               (queryStr.TIP_TUR_ID == 0 || p.TIP_TUR_ID == queryStr.TIP_TUR_ID) &&
                               (queryStr.TUR_NOME == null ||
                               (p.TUR_NOME.Contains(queryStr.TUR_NOME)))
                         select p);


            return ToDTO(query);
     
        }

    }
}

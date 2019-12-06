using System.Linq;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Generic;
using System.Collections.Generic;
using ESO.ESOESCOLA.DAL.Repositorio;

namespace ESO.ESOESCOLA.DAL.Comum
{
    public class TipoTurmaDAL  : GenericMapperDAO<TIPO_TURMA, TipoTurmaDTO, int>
    {
        public esoensinoEntities db;
        public TipoTurmaDAL() : base("esoensinoEntities")
        {
            db = new esoensinoEntities();
        }
        public TipoTurmaDTO Buscar(int id)
        {

            var query = (from p in db.TIPO_TURMA
                         where (p.TIP_TUR_ID == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<TipoTurmaDTO> Listar(string queryStr)
        {

            var query = (from p in db.TIPO_TURMA
                         where (queryStr == null ||
                               (p.TIP_TUR_DESCRICAO.Contains(queryStr)))
                         select p);


            return ToDTO(query);

        }

    }
}

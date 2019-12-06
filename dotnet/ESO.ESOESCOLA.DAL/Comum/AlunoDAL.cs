using System.Linq;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Generic;
using System.Collections.Generic;
using ESO.ESOESCOLA.DAL.Repositorio;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.DAL.Comum
{
    public class AlunoDAL : GenericMapperDAO<ALUNO, AlunoDTO, int>
    {
        public esoensinoEntities db;
        public AlunoDAL() : base("esoensinoEntities")
        {
            db = new esoensinoEntities();
        }
        public IList<AlunoDTO> Listar(FiltroDTO queryStr)
        {

             var query = (from p in db.ALUNO
                         where (p.EMP_ID == 1) &&
                               (queryStr == null ||
                               (p.ALU_NOME.StartsWith(queryStr.CUR_NOME)))
                         select p);


            return ToDTO(query);

        }

    }
}

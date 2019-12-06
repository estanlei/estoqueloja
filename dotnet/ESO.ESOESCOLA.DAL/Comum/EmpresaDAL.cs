using System.Linq;
using ESO.ESOESCOLA.DTO;
using ESO.ESOESCOLA.DAL.Generic;
using System.Collections.Generic;
using ESO.ESOESCOLA.DAL.Repositorio;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.DAL.Comum
{
    public class EmpresaDAL : GenericMapperDAO<EMPRESA, EmpresaDTO, int>
    {
        public esoensinoEntities db;
        public EmpresaDAL() : base("esoensinoEntities")
        {
            db = new esoensinoEntities();
        }
        public EmpresaDTO Buscar(int id)
        {

            var query = (from p in db.EMPRESA
                         where (p.EMP_ID == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<EmpresaDTO> Listar(FiltroDTO queryStr)
        {

            var query = (from p in db.EMPRESA
                         where (queryStr == null ||
                               (p.EMP_RAZAO_SOCIAL.Contains(queryStr.EMP_RAZAO_SOCIAL)))
                         select p);


            return ToDTO(query);

        }
    }
}

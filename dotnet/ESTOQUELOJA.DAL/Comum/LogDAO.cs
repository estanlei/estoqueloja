
using System.Linq;
using ESTOQUELOJA.DTO.Comum;
using ESTOQUELOJA.DAO.Generic;
using System.Collections.Generic;
using ESTOQUELOJA.DAO.Repositorio;

namespace ESTOQUELOJA.DAL.Comum
{
    public class LogDAO : GenericMapperDAO<LOG, LogDTO, int>
    {
        public estoquelojaEntities db;
        public LogDAO() : base("estoquelojaEntities")
        {
            db = new estoquelojaEntities();
        }
        public LogDTO Buscar(int id)
        {

            var query = (from p in db.LOG
                         where (p.LOG_ID == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<LogDTO> Listar(string queryStr, 
                                    string login,
                                    int produto)
        {

            var query = (from p in db.LOG
                         where (queryStr == null ||
                               (p.LOG_DESCRICAO.StartsWith(queryStr))) &&
                               (login == null ||
                               (p.USU_LOGIN.StartsWith(login))) &&
                               (produto == 0 ||
                               (p.PRO_ID == produto)) 
                         select p);


            return ToDTO(query);

        }
    }
}

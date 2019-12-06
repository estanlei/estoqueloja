using System.Web.Http;
using ESTOQUELOJA.BLL.Comum;
using ESTOQUELOJA.DTO.Comum;
using System.Collections.Generic;

namespace ESTOQUELOJA.API.Controllers
{
    public class LogController : ApiController
    {
        [HttpGet]
        public IList<LogDTO> Listar(string msg, string login, int produto)
        {
            var _lista = new LogBusiness().Listar(msg, login, produto);
            return _lista;

        }
        [HttpGet]
        public LogDTO Buscar(int id)
        {
            var _log = new LogBusiness().Buscar(id);
            return _log;
        }


    }
}

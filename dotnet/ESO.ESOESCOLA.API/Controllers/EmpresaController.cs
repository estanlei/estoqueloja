
using System.Web.Http;
using ESO.ESOESCOLA.BLL;
using ESO.ESOESCOLA.DTO;
using System.Collections.Generic;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.API.Controllers
{
    public class EmpresaController : ApiController
    {
        // GET: api/Empresa
        public IList<EmpresaDTO> Listar(FiltroDTO queryStr)
        {
            var empresa = new EmpresaBLL().Listar(queryStr);

            return empresa;
        }

        // GET: api/Empresa/5
        public EmpresaDTO Get(int id)
        {
            var turma = new EmpresaBLL().Buscar(id);

            return turma;
        }

        // POST: api/Empresa
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Empresa/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Empresa/5
        public void Delete(int id)
        {
        }
    }
}

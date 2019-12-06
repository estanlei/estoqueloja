
using System.Web.Http;
using ESO.ESOESCOLA.BLL;
using ESO.ESOESCOLA.DTO;
using System.Collections.Generic;
using ESO.ESOESCOLA.DTO.Custom;

namespace ESO.ESOESCOLA.API.Controllers
{
    public class AlunoController : ApiController
    {
        [HttpGet]
        public IList<AlunoDTO> Listar(FiltroDTO queryStr)
        {
            var aluno = new AlunoBLL().Listar(queryStr);

            return aluno;

        }

        public AlunoDTO Get(int id)
        {
            var aluno = new AlunoBLL().Buscar(id);

            return aluno;
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

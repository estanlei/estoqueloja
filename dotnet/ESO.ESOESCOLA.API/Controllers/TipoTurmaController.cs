
using System.Web.Http;
using ESO.ESOESCOLA.BLL;
using ESO.ESOESCOLA.DTO;
using System.Collections.Generic;


namespace ESO.ESOESCOLA.API.Controllers
{
    public class TipoTurmaController : ApiController
    {
        [HttpGet]
        public IList<TipoTurmaDTO> Listar(string queryStr)
        {
            var lstturma = new TipoTurmaBLL().Listar(queryStr);
            return lstturma;

        }
        [HttpGet]
        public TipoTurmaDTO get(int id)
        {
            var turma = new TipoTurmaBLL().Buscar(id);

            return turma;
        }

        // POST: api/Curso
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Curso/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Curso/5
        public void Delete(int id)
        {
        }
    }
}

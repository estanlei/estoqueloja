using System;
using System.Web.Http;
using ESO.Base.Mensagem;
using ESO.ESOESCOLA.BLL;
using ESO.ESOESCOLA.DTO;
using System.Web.Http.Results;
using System.Collections.Generic;
using ESO.ESOESCOLA.DTO.Custom;
using System.Web.Http.Cors;

namespace ESO.ESOESCOLA.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CursoController : ApiController
    {
        // GET: api/Curso
        [HttpGet]
        public IList<CursoDTO> Listar(string queryStr)
        {
            var fil = new FiltroDTO();

            var curso = new CursoBLL().Listar(fil);

            return curso;
        }

        // GET: api/Empresa/5
        [HttpGet]
        public CursoDTO Get(int id)
        {
            var curso = new CursoBLL().Buscar(id);

            return curso;
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

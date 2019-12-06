

using System.Web.Http;
using ESO.ESOESCOLA.BLL;
using ESO.ESOESCOLA.DTO;
using System.Collections.Generic;
using ESO.ESOESCOLA.DTO.Custom;
using System.Web.Http.Cors;

namespace ESO.ESOESCOLA.API.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class TurmaController : ApiController
    {
        [HttpGet]
        public IList<TurmaDTO> Listar(string turnome, 
                                      int perid, 
                                      int tipturid, 
                                      int curid)
        {

            var fil = new FiltroDTO();
            fil.TUR_NOME = turnome;
            fil.PER_ID = perid;
            fil.TIP_TUR_ID = tipturid;
            fil.CUR_ID = curid;

            var lstturma = new TurmaBLL().Listar(fil);
            return  lstturma;

        }
        [HttpGet]
        public TurmaDTO Buscar(int id)
        {
             var turma = new TurmaBLL().Buscar(id);

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
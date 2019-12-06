using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ESO.ESOESCOLA.API.Controllers
{
    public class ProfessorController : ApiController
    {
        // GET: api/Professor
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Professor/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Professor
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Professor/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Professor/5
        public void Delete(int id)
        {
        }
    }
}

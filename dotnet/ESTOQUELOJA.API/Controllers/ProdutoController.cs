using System.Web.Http;
using ESTOQUELOJA.BLL.Comum;
using ESTOQUELOJA.DTO.Comum;
using System.Collections.Generic;

namespace ESTOQUELOJA.API.Controllers
{
    public class ProdutoController : ApiController
    {
        protected ProdutoBusiness business { get; set; }
        public ProdutoController()
        {
            business = new ProdutoBusiness();
        }
        [HttpGet]
        public IList<ProdutoDTO> Listar(int? id, string nome)
        {
            if (id == null)
                id = 0;

            var _lista = business.Listar((int)id, nome);
            return _lista;

        }
        [HttpGet]
        public ProdutoDTO Buscar(int id)
        {
            var _produto = business.Buscar(id);
            return _produto;
        }
        public void Post([FromBody]ProdutoDTO value)
        {
            business.Salvar(value);
        }
        [HttpGet]
        public void Delete(int id)
        {
            business.Excluir(id);
        }
    }
}

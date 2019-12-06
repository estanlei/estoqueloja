
using System.Web.Http;
using ESTOQUELOJA.BLL.Comum;
using ESTOQUELOJA.DTO.Comum;
using System.Collections.Generic;


namespace ESTOQUELOJA.API.Controllers
{
    public class UsuarioController : ApiController
    {
        protected UsuarioBusiness business { get; set; }
        public UsuarioController()
        {
            business = new UsuarioBusiness();
        }
    
        [HttpGet]
        public UsuarioDTO Logar(string login, string senha)
        {
            return business.Logar(login, senha);

        }
        [HttpGet]
        public IList<UsuarioDTO> Listar(string nome)
        {
            var _lista = business.Listar(nome);
            return _lista;

        }
        [HttpGet]
        public UsuarioDTO Buscar(string login)
        {
            var _usuario = business.Buscar(login);
            return _usuario;
        }
        public void Post([FromBody]UsuarioDTO value)
        {
           business.Salvar(value);
        }

        [HttpGet]
        public void Delete(string id)
        {
            business.Excluir(id);
        }
    }
}

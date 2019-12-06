using ESTOQUELOJA.DAL.Comum;
using ESTOQUELOJA.DTO.Comum;
using System.Collections.Generic;

namespace ESTOQUELOJA.BLL.Comum
{
    public class UsuarioBusiness
    {
        protected UsuarioDAO dao { get; set; }
        public UsuarioBusiness()
        {
            dao = new UsuarioDAO();
        }
        public UsuarioDTO Logar(string login, string senha)
        {
            return dao.Logar(login, senha);

        }
        public UsuarioDTO Buscar(string id)
        {
            return dao.Buscar(id); 
        }
        public IList<UsuarioDTO> Listar(string queryStr)
        {
            return dao.Listar(queryStr);
        }
        public void Salvar(UsuarioDTO entity)
        {
            var reg = this.Buscar(entity.USU_LOGIN);
            if (reg != null)
                dao.Merge(entity);
            else
                dao.Save(entity);
        }
        public void Excluir(string email)
        {
            dao.Delete(email);
        }

    }
}

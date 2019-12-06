
using System.Linq;
using ESTOQUELOJA.DTO.Comum;
using ESTOQUELOJA.DAO.Generic;
using System.Collections.Generic;
using ESTOQUELOJA.DAO.Repositorio;

namespace ESTOQUELOJA.DAL.Comum
{
    public class UsuarioDAO : GenericMapperDAO<USUARIO, UsuarioDTO, string>
    {
        public estoquelojaEntities db;
        public UsuarioDAO() : base("estoquelojaEntities")
        {
            db = new estoquelojaEntities();
        }
        public UsuarioDTO Logar( string login, string senha)
        {

            var query = (from p in db.USUARIO
                         where (p.USU_LOGIN.ToUpper() == login.ToUpper()) &&
                               (p.USU_SENHA.ToUpper() == senha.ToUpper())
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public UsuarioDTO Buscar(string id)
        {

            var query = (from p in db.USUARIO
                         where (p.USU_LOGIN == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<UsuarioDTO> Listar(string queryStr)
        {

            var query = (from p in db.USUARIO
                         where (queryStr == null ||
                               (p.USU_NOME.StartsWith(queryStr)))
                         select p);


            return ToDTO(query);

        }
    }
}

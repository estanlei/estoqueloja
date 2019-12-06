
using System.Linq;
using ESTOQUELOJA.DTO.Comum;
using ESTOQUELOJA.DAO.Generic;
using System.Collections.Generic;
using ESTOQUELOJA.DAO.Repositorio;

namespace ESTOQUELOJA.DAL.Comum
{
    public class ProdutoDAO : GenericMapperDAO<PRODUTO, ProdutoDTO, int>
    {
        public estoquelojaEntities db;
        public ProdutoDAO() : base("estoquelojaEntities")
        {
            db = new estoquelojaEntities();
        }
        public ProdutoDTO Buscar(int id)
        {

            var query = (from p in db.PRODUTO
                         where (p.PRO_ID == id)
                         select p).FirstOrDefault();


            return ToDTO(query);

        }
        public IList<ProdutoDTO> Listar(int id, string nome)
        {
            if (nome == "null")
                nome = null;

            var query = (from p in db.PRODUTO
                         where (id == 0 || (id > 0 && p.PRO_ID == id))
                         select p);

            if (query != null && !string.IsNullOrEmpty(nome)) { 
                query = query.Where(p => p.PRO_DESCRICAO.StartsWith(nome));
            }

            return ToDTO(query);

        }
    }
}

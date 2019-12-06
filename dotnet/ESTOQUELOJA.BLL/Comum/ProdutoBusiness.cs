using ESTOQUELOJA.DAL.Comum;
using ESTOQUELOJA.DTO.Comum;
using System;
using System.Collections.Generic;
using System.Transactions;

namespace ESTOQUELOJA.BLL.Comum
{
    public class ProdutoBusiness
    {
        protected ProdutoDAO dao { get; set; }
        protected LogBusiness log { get; set; }
        public ProdutoBusiness()
        {
            dao = new ProdutoDAO();
            log = new LogBusiness();

        }
        public ProdutoDTO Buscar(int id)
        {
            return dao.Buscar(id);
        }
        public IList<ProdutoDTO> Listar(int id, string nome)
        {
            return dao.Listar(id, nome);
        }
        public void Salvar(ProdutoDTO entity)
        {
            var reg = this.Buscar(entity.PRO_ID);
            try
            {
                using (TransactionScope scope = new TransactionScope())
                {
                    if (reg != null)
                    {
                        if (entity.PRO_DESCRICAO != reg.PRO_DESCRICAO)
                            log.RegistrarLog("Descrição Alterada. ID = " + entity.PRO_ID.ToString(), entity.PRO_ID);
                        if (entity.PRO_VLR_UN != reg.PRO_VLR_UN)
                            log.RegistrarLog("PR Unitário Alterado. ID = " + entity.PRO_ID.ToString(), entity.PRO_ID);
                        if (entity.PRO_MARGEM_LUCRO != reg.PRO_MARGEM_LUCRO)
                            log.RegistrarLog("Margem Alterada. ID = " + entity.PRO_ID.ToString(), entity.PRO_ID);
                        if (entity.PRO_QTD_ESTOQUE != reg.PRO_QTD_ESTOQUE)
                            log.RegistrarLog("Qtde Estoque Alterada. ID = " + entity.PRO_ID.ToString(), entity.PRO_ID);

                        dao.Merge(entity);
                    }
                    else
                    {
                        log.RegistrarLog("Inclusão => " + entity.PRO_DESCRICAO, 0);
                        dao.Save(entity);
                    }

                    scope.Complete();
                }
            }
            catch(Exception ex)
            {
                log.RegistrarLog("Erro :" +ex.Message, entity.PRO_ID);
            }
        }
        public void Excluir(int id)
        {
            dao.Delete(id);
        }
    }
}

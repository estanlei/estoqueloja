using ESTOQUELOJA.DAL.Comum;
using ESTOQUELOJA.DTO.Comum;
using System;
using System.Collections.Generic;

namespace ESTOQUELOJA.BLL.Comum
{
    public class LogBusiness
    {
        protected LogDAO dao { get; set; }
        public LogBusiness()
        {
            dao = new LogDAO();
        }
        public LogDTO Buscar(int id)
        {
            return dao.Buscar(id); 
        }
        public IList<LogDTO> Listar(string queryStr,
                                    string login,
                                    int produto)
        {
            return dao.Listar(queryStr, login, produto);
        }
        public void RegistrarLog(string msg, int pro_id)
        {
            var dto = new LogDTO();
            if (pro_id > 0)
                dto.PRO_ID = pro_id;
            dto.LOG_DESCRICAO = msg;
            dto.LOG_DATA = DateTime.Now;
            dao.Save(dto);
        }
        public void Salvar(LogDTO entity)
        {
            dao.Save(entity);
        }
        public void Excluir(LogDTO entity)
        {
            dao.Save(entity);
        }
    }
}

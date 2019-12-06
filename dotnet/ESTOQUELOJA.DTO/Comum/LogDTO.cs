using ESTOQUELOJA.DTO.Base;
using System;
using System.Collections.Generic;

namespace ESTOQUELOJA.DTO.Comum
{
    [GenericAttribute("LOG_ID")]
    public class LogDTO
    {
        public int LOG_ID { get; set; }
        public Nullable<int> PRO_ID { get; set; }
        public string LOG_DESCRICAO { get; set; }
        public Nullable<System.DateTime> LOG_DATA { get; set; }
        public string USU_LOGIN { get; set; }

        public virtual ProdutoDTO PRODUTO { get; set; }
        public virtual UsuarioDTO USUARIO { get; set; }
    }
}

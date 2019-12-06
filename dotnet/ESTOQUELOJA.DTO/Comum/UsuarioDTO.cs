using ESTOQUELOJA.DTO.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESTOQUELOJA.DTO.Comum
{
    [GenericAttribute("USU_LOGIN")]
    public class UsuarioDTO
    {
        public UsuarioDTO()
        {
           // this.LOG = new HashSet<LogDTO>();
        }

        public string USU_LOGIN { get; set; }
        public string USU_NOME { get; set; }
        public string USU_SENHA { get; set; }
        public bool USU_ADMIN { get; set; }
     //   public virtual ICollection<LogDTO> LOG { get; set; }
    }
}

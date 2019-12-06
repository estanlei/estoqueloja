using ESTOQUELOJA.DTO.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESTOQUELOJA.DTO.Comum
{
    [GenericAttribute("PRO_ID")]
    public class ProdutoDTO
    {
        public ProdutoDTO()
        {
         //   this.LOG = new HashSet<LogDTO>();
        }

        public int PRO_ID { get; set; }
        public string PRO_DESCRICAO { get; set; }
        public Nullable<decimal> PRO_VLR_UN { get; set; }
        public Nullable<decimal> PRO_MARGEM_LUCRO { get; set; }
        public Nullable<decimal> PRO_QTD_ESTOQUE { get; set; }
      //  public virtual ICollection<LogDTO> LOG { get; set; }
    }
}


using ESO.FRAMEWORK.Base.Business;
using System;
using System.Collections.Generic;
namespace ESO.ESOESCOLA.DTO
{
    [GenericBLL("TIP_TUR_ID")]
    public class TipoTurmaDTO
    {
        public int TIP_TUR_ID { get; set; }
        public string TIP_TUR_DESCRICAO { get; set; }
    }
}

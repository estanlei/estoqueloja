//------------------------------------------------------------------------------
// <auto-generated>
//    O código foi gerado a partir de um modelo.
//
//    Alterações manuais neste arquivo podem provocar comportamento inesperado no aplicativo.
//    Alterações manuais neste arquivo serão substituídas se o código for gerado novamente.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ESO.ESOESCOLA.DTO
{
    using System;
    using System.Collections.Generic;
    
    public partial class SerieTipoDTO
    {
        public SerieTipoDTO()
        {
            this.SERIE = new HashSet<SerieDTO>();
        }
    
        public int TIP_SER_ID { get; set; }
        public string TIP_SER_DESCRICAO { get; set; }
    
        public virtual ICollection<SerieDTO> SERIE { get; set; }
    }
}

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
    
    public partial class TipoCursoDTO
    {
        public TipoCursoDTO()
        {
            this.CURSO = new HashSet<CursoDTO>();
        }
    
        public int TIP_CUR_ID { get; set; }
        public string TIP_CUR_DESCRICAO { get; set; }
    
        public virtual ICollection<CursoDTO> CURSO { get; set; }
    }
}

//------------------------------------------------------------------------------
// <auto-generated>
//    O código foi gerado a partir de um modelo.
//
//    Alterações manuais neste arquivo podem provocar comportamento inesperado no aplicativo.
//    Alterações manuais neste arquivo serão substituídas se o código for gerado novamente.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ESO.ESOESCOLA.DAL.Repositorio
{
    using System;
    using System.Collections.Generic;
    
    public partial class CURSO
    {
        public CURSO()
        {
            this.CURSO_DISCIPLINA = new HashSet<CURSO_DISCIPLINA>();
            this.MATRICULA = new HashSet<MATRICULA>();
            this.SERIE = new HashSet<SERIE>();
            this.TURMA = new HashSet<TURMA>();
        }
    
        public int CUR_ID { get; set; }
        public int EMP_ID { get; set; }
        public string CUR_NOME { get; set; }
        public int TIP_CUR_ID { get; set; }
        public string USU_LOGIN { get; set; }
        public Nullable<System.DateTime> DATA_EXCLUSAO { get; set; }
        public Nullable<System.DateTime> DATA_INCLUSAO { get; set; }
    
        public virtual ICollection<CURSO_DISCIPLINA> CURSO_DISCIPLINA { get; set; }
        public virtual EMPRESA EMPRESA { get; set; }
        public virtual TIPO_CURSO TIPO_CURSO { get; set; }
        public virtual ICollection<MATRICULA> MATRICULA { get; set; }
        public virtual ICollection<SERIE> SERIE { get; set; }
        public virtual ICollection<TURMA> TURMA { get; set; }
    }
}

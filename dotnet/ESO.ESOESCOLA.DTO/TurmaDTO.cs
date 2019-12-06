
using ESO.FRAMEWORK.Base.Business;
using System;
using System.Collections.Generic;

namespace ESO.ESOESCOLA.DTO
{
    [GenericBLL("TUR_ID")]
    public class TurmaDTO 
    {
        public TurmaDTO()
        {
            this.MATRICULA = new HashSet<MatriculaDTO>();
            this.PROFESSOR_TURMA = new HashSet<ProfessorTurmaDTO>();
        }
   
        public int TUR_ID { get; set; }
        public string TUR_NOME { get; set; }
        public int CUR_ID { get; set; }
        public Nullable<int> SER_ID { get; set; }
        public int PER_ID { get; set; }
        public int TUR_ANOLETIVO { get; set; }
        public Nullable<int> TUR_ANOGRADE { get; set; }
        public Nullable<System.DateTime> TUR_DATINI { get; set; }
        public Nullable<System.DateTime> TUR_DATFIM { get; set; }
        public Nullable<int> TUR_QTDEALUNOS { get; set; }
        public int TIP_TUR_ID { get; set; }
        public Nullable<int> SAL_ID { get; set; }
        public int EMP_ID { get; set; }
        public string USU_LOGIN { get; set; }
        public Nullable<System.DateTime> DATA_EXCLUSAO { get; set; }
        public Nullable<System.DateTime> DATA_INCLUSAO { get; set; }
        public virtual CursoDTO CURSO { get; set; }
        public virtual EmpresaDTO EMPRESA { get; set; }
        public virtual ICollection<MatriculaDTO> MATRICULA { get; set; }
        public virtual PeriodoDTO PERIODO { get; set; }
        public virtual ICollection<ProfessorTurmaDTO> PROFESSOR_TURMA { get; set; }
        public virtual SalaDTO SALA { get; set; }
        public virtual SerieDTO SERIE { get; set; }
    }
}



using System;
using System.Collections.Generic;

namespace ESO.ESOESCOLA.DTO
{
    public class CursoDTO
    {
        public CursoDTO()
        {
            //this.CURSO_DISCIPLINA = new HashSet<CursoDisciplinaDTO>();
            //this.MATRICULA = new HashSet<MatriculaDTO>();
            //this.SERIE = new HashSet<SerieDTO>();
            //this.TURMA = new HashSet<TurmaDTO>();
        }

        public int CUR_ID { get; set; }
        public int EMP_ID { get; set; }
        public string CUR_NOME { get; set; }
        public int TIP_CUR_ID { get; set; }
        public string USU_LOGIN { get; set; }
        public Nullable<System.DateTime> DATA_EXCLUSAO { get; set; }
        public Nullable<System.DateTime> DATA_INCLUSAO { get; set; }

        //public virtual ICollection<CursoDisciplinaDTO> CURSO_DISCIPLINA { get; set; }
        //public virtual EmpresaDTO EMPRESA { get; set; }
        //public virtual TipoCursoDTO TIPO_CURSO { get; set; }
        //public virtual ICollection<MatriculaDTO> MATRICULA { get; set; }
        //public virtual ICollection<SerieDTO> SERIE { get; set; }
        //public virtual ICollection<TurmaDTO> TURMA { get; set; }
    }
}

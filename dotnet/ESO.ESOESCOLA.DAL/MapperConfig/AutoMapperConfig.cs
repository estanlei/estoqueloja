using AutoMapper;
using ESO.ESOESCOLA.DAL.Repositorio;
using ESO.ESOESCOLA.DTO;

namespace ESO.FRAMEWORK.MapperConfig
{

    public sealed class AutoMapperConfig
    {
        public Mapper mapper { get; }

        #region Variáveis internas
        static AutoMapperConfig _instance;
        static MapperConfiguration MapperConfiguration;
        #endregion

        #region Métodos Singleton
        public static AutoMapperConfig MapperConfig
        {
            get { return _instance ?? (_instance = new AutoMapperConfig()); }
        }


        private AutoMapperConfig()
        {
            var Turma = new TurmaProfile();
            var Tipo_curso = new TipoCursoProfile();
            var Serie_tipo = new SerieTipoProfile();
            var Serie = new SerieProfile();
            var Sala = new SalaProfile();
            var Professor_turma = new ProfessorTurmaProfile();
            var Professor_disciplina = new ProfessorDisciplinaProfile();
            var Professor = new ProfessorProfile();
            var Periodo = new PeriodoProfile();
            var Matricula_tipo = new MatriculaTipoProfile();
            var Matricula = new MatriculaProfile();
            var Empresa = new EmpresaProfile();
            var Disciplina = new DisciplinaProfile();
            var Curso_disciplina = new CursoDisciplinaProfile();
            var Curso = new CursoProfile();
            var Aluno_foto = new AlunoFotoProfile();
            var Aluno = new AlunoProfile();
            var TipoTurma = new TipoTurmaProfile();

            MapperConfiguration = new MapperConfiguration(cfg => {
                cfg.AddProfile(Turma);
                cfg.AddProfile(Tipo_curso);
                cfg.AddProfile(Serie_tipo);
                cfg.AddProfile(Serie);
                cfg.AddProfile(Sala);
                cfg.AddProfile(Professor_turma);
                cfg.AddProfile(Professor_disciplina);
                cfg.AddProfile(Professor);
                cfg.AddProfile(Periodo);
                cfg.AddProfile(Matricula_tipo);
                cfg.AddProfile(Matricula);
                cfg.AddProfile(Empresa);
                cfg.AddProfile(Disciplina);
                cfg.AddProfile(Curso_disciplina);
                cfg.AddProfile(Curso);
                cfg.AddProfile(Aluno_foto);
                cfg.AddProfile(Aluno);
                cfg.AddProfile(TipoTurma);

            });

            MapperConfiguration.CompileMappings();
            mapper = new Mapper(MapperConfiguration);
        }

        #endregion
    }

    public class TurmaProfile : Profile { public TurmaProfile() { CreateMap<TURMA, TurmaDTO>(); CreateMap<TurmaDTO, TURMA>(); } }

    public class TipoTurmaProfile : Profile { public TipoTurmaProfile() { CreateMap<TIPO_TURMA, TipoTurmaDTO>(); CreateMap<TipoTurmaDTO, TIPO_TURMA>(); } }
    public class TipoCursoProfile : Profile { public TipoCursoProfile() { CreateMap<TIPO_CURSO, TipoCursoDTO>(); CreateMap<TipoCursoDTO, TIPO_CURSO>(); } }
    public class SerieTipoProfile : Profile { public SerieTipoProfile() { CreateMap<SERIE_TIPO, SerieTipoDTO>(); CreateMap<SerieTipoDTO, SERIE_TIPO>(); } }
    public class SerieProfile : Profile { public SerieProfile() { CreateMap<SERIE, SerieDTO>(); CreateMap<SerieDTO, SERIE>(); } }
    public class SalaProfile : Profile { public SalaProfile() { CreateMap<SALA, SalaDTO>(); CreateMap<SalaDTO, SALA>(); } }
    public class ProfessorTurmaProfile : Profile { public ProfessorTurmaProfile() { CreateMap<PROFESSOR_TURMA, ProfessorTurmaDTO>(); CreateMap<ProfessorTurmaDTO, PROFESSOR_TURMA>(); } }
    public class ProfessorDisciplinaProfile : Profile { public ProfessorDisciplinaProfile() { CreateMap<PROFESSOR_DISCIPLINA, ProfessorDisciplinaDTO>(); CreateMap<ProfessorDisciplinaDTO, PROFESSOR_DISCIPLINA>(); } }
    public class ProfessorProfile : Profile { public ProfessorProfile() { CreateMap<PROFESSOR, ProfessorDTO>(); CreateMap<ProfessorDTO, PROFESSOR>(); } }
    public class PeriodoProfile : Profile { public PeriodoProfile() { CreateMap<PERIODO, PeriodoDTO>(); CreateMap<PeriodoDTO, PERIODO>(); } }
    public class MatriculaTipoProfile : Profile { public MatriculaTipoProfile() { CreateMap<MATRICULA_TIPO, MatriculaTipoDTO>(); CreateMap<MatriculaTipoDTO, MATRICULA_TIPO>(); } }
    public class MatriculaProfile : Profile { public MatriculaProfile() { CreateMap<MATRICULA, MatriculaDTO>(); CreateMap<MatriculaDTO, MATRICULA>(); } }
    public class EmpresaProfile : Profile { public EmpresaProfile() { CreateMap<EMPRESA, EmpresaDTO>(); CreateMap<EmpresaDTO, EMPRESA>(); } }
    public class DisciplinaProfile : Profile { public DisciplinaProfile() { CreateMap<DISCIPLINA, DisciplinaDTO>(); CreateMap<DisciplinaDTO, DISCIPLINA>(); } }
    public class CursoDisciplinaProfile : Profile { public CursoDisciplinaProfile() { CreateMap<CURSO_DISCIPLINA, CursoDisciplinaDTO>(); CreateMap<CursoDisciplinaDTO, CURSO_DISCIPLINA>(); } }
    public class CursoProfile : Profile { public CursoProfile() { CreateMap<CURSO, CursoDTO>(); CreateMap<CursoDTO, CURSO>(); } }
    public class AlunoFotoProfile : Profile { public AlunoFotoProfile() { CreateMap<ALUNO_FOTO, AlunoFotoDTO>(); CreateMap<AlunoFotoDTO, ALUNO_FOTO>(); } }
    public class AlunoProfile : Profile { public AlunoProfile() { CreateMap<ALUNO, AlunoDTO>(); CreateMap<AlunoDTO, ALUNO>(); } }
}

using AutoMapper;
using ESTOQUELOJA.DTO.Comum;
using ESTOQUELOJA.DAO.Repositorio;

namespace ESTOQUELOJA.DAO.Automapper
{

    public sealed class AutoMapperConfig
    {
        public Mapper mapper { get; }

        static AutoMapperConfig _instance;
        static MapperConfiguration MapperConfiguration;

        public static AutoMapperConfig MapperConfig
        {
            get { return _instance ?? (_instance = new AutoMapperConfig()); }
        }


        private AutoMapperConfig()
        {
            var Produto = new ProdutoProfile();
            var Usuario = new UsuarioProfile();
            var Log = new LogProfile();

            MapperConfiguration = new MapperConfiguration(cfg => {
                cfg.AddProfile(Produto);
                cfg.AddProfile(Usuario);
                cfg.AddProfile(Log);
            });

            MapperConfiguration.CompileMappings();
            mapper = new Mapper(MapperConfiguration);
        }

    }

    public class ProdutoProfile : Profile { public ProdutoProfile() { CreateMap<PRODUTO, ProdutoDTO>(); CreateMap<ProdutoDTO, PRODUTO>(); } }

    public class UsuarioProfile : Profile { public UsuarioProfile() { CreateMap<USUARIO, UsuarioDTO>(); CreateMap<UsuarioDTO, USUARIO>(); } }
    public class LogProfile : Profile { public LogProfile() { CreateMap<LOG, LogDTO>(); CreateMap<LogDTO, LOG>(); } }

}

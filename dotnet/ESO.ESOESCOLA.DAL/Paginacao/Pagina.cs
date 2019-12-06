
using System.Collections.Generic;

namespace ESO.ESOESCOLA.DAL.Paginacao
{
    public class Pagina<T>
    {
        public IEnumerable<T> lista {get; set;}
        public int pagina { get; set; }
        public int numeroPaginas { get; set; }
        public int itensPorPagina { get; set; }
        public int numeroRegistros { get; set; }

        public Pagina<D> Derivar<D>(IEnumerable<D> items)
        {
            return new Pagina<D>()
                {
                    lista = items,
                    pagina = pagina,
                    numeroPaginas = numeroPaginas,
                    itensPorPagina = itensPorPagina,
                    numeroRegistros = numeroRegistros
                };
            
        }
              
    }
}
using ESO.Base.Paginacao;
using System;
using System.Collections.Generic;


namespace ESO.Base.Mensagem
{

    public class JSONResponse
    {
        public Dictionary<string, object> result { set; get; }
        public Message message { set; get; }
        public Dictionary<string, List<string>> validationMessage { set; get; }
        public bool ShowValidationErros { get; set; }
        public Pagina<object> page { set; get; }
        public bool success  {set; get;}

        public JSONResponse()
        {
            Init();
        }

        public JSONResponse(IEnumerable<Object> value)
        {
            Init();
            result.Add("model", value);
        }


        public JSONResponse(string key,IEnumerable<Object> value)
        {
            Init();
            result.Add(key, value);
        }

        public JSONResponse(object value)
        {
            Init();
            result.Add("model", value);
        }
        public JSONResponse(string key, object value)
        {
            Init();
            result.Add(key, value);
        }

        public JSONResponse(Message msg)
        {
            Init();            
        }

        public void Init()
        {
            result = new Dictionary<string, object>();
            validationMessage = new Dictionary<string, List<string>>();
            success = true;
        }

        /// <summary>
        /// Adiciona um objeto ao resultado da requisição Json
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        public void Add(string key, object value)
        {
            result.Add(key, value);
        }

        /// <summary>
        /// Adiciona a página a resposta da requisição em Json.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="key"></param>
        /// <param name="pagina"></param>
        public void AddPage<T>(string key, Pagina<T> pagina) where T : class
        {
            var obj = pagina.lista;
            pagina.lista = null;
            result.Add(key, obj);

            Pagina<object> paginaNova = new Pagina<object>(){
            
                itensPorPagina = pagina.itensPorPagina,
                numeroPaginas = pagina.numeroPaginas,
                pagina = pagina.pagina,
                numeroRegistros = pagina.numeroRegistros

            };
            this.page = paginaNova;
        }

        public void Remove(string key)
        {
            result.Remove(key);
        }

        /// <summary>
        /// Adiciona mensagens de validação para determinada propriedade do model
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        public void AddValidationMessage(string key, List<string> value)
        {
            validationMessage.Add(key, value);
        }

 

    }   

}
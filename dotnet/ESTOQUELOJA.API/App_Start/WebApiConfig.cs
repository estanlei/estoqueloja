using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ESTOQUELOJA.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            var politicas = new EnableCorsAttribute(origins: "*",
                                                    methods: "*",
                                                    headers: "*");
            config.EnableCors(politicas);
 
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                    name: "DefaultApi",
                    routeTemplate: "api/{controller}/{action}/{id}",
                    defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}

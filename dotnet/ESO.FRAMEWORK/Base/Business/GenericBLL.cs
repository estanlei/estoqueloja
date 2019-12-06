using System;
using System.Data;

namespace ESO.FRAMEWORK.Base.Business
{
    [AttributeUsage(AttributeTargets.Class)]
    public class GenericBLL : Attribute
    {
        public string[] PrimaryKey { get; set; }
        public GenericBLL()
        {
        }
        public GenericBLL(params string[] PrimaryKey)
        {
            this.PrimaryKey = PrimaryKey;
        }
    }

}

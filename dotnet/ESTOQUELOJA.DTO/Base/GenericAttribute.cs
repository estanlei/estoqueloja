using System;

namespace ESTOQUELOJA.DTO.Base
{
    [AttributeUsage(AttributeTargets.Class)]
    public class GenericAttribute : Attribute
    {
        public string[] PrimaryKey { get; set; }
        public GenericAttribute()
        {
        }
        public GenericAttribute(params string[] PrimaryKey)
        {
            this.PrimaryKey = PrimaryKey;
        }
    }

}

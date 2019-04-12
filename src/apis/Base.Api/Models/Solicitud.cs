using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Base.Api.Models
{
    public class Solicitud
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Correo { get; set; }
        public string Telefono { get; set; }
        public string Celular { get; set; }
        public string Electoral { get; set; }
        public string Empresa { get; set; }
        public double Sueldo { get; set; }
        public double Ingresos { get; set; }
        public string NombreGarante { get; set; }
        public string ApellidoGarante { get; set; }
        public string CorreoGar { get; set; }
        public string TelefonoGar { get; set; }
        public string CelularGar { get; set; }

    }
}

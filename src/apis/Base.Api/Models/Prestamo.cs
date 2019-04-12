using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Base.Api.Models
{
    public class Prestamo
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public double Monto { get; set; }
        public int CuotasVal { get; set; }
        public string CuotasQ { get; set; }
        public int CuotasAlready { get; set; }
        public int CuotasPending { get; set; }
        public string Status { get; set; }
        public string Payment { get; set; }
        public string Ends { get; set; }
    }
}

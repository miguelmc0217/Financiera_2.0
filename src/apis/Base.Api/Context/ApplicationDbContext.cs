using Base.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Base.Api.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            :base(options)
        {

        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Prestamo> Prestamos { set; get; }
        public DbSet<Solicitud> Solicitudes { set; get; }
     }
}

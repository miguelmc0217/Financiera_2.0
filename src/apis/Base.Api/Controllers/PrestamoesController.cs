using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Base.Api.Context;
using Base.Api.Models;

namespace Base.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrestamoesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PrestamoesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Prestamoes
        [HttpGet]
        public IEnumerable<Prestamo> GetPrestamos()
        {
            return _context.Prestamos;
        }

        // GET: api/Prestamoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPrestamo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prestamo = await _context.Prestamos.FindAsync(id);

            if (prestamo == null)
            {
                return NotFound();
            }

            return Ok(prestamo);
        }

        // PUT: api/Prestamoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrestamo([FromRoute] int id, [FromBody] Prestamo prestamo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != prestamo.Id)
            {
                return BadRequest();
            }

            _context.Entry(prestamo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PrestamoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Prestamoes
        [HttpPost]
        public async Task<IActionResult> PostPrestamo([FromBody] Prestamo prestamo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Prestamos.Add(prestamo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrestamo", new { id = prestamo.Id }, prestamo);
        }

        // DELETE: api/Prestamoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrestamo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prestamo = await _context.Prestamos.FindAsync(id);
            if (prestamo == null)
            {
                return NotFound();
            }

            _context.Prestamos.Remove(prestamo);
            await _context.SaveChangesAsync();

            return Ok(prestamo);
        }

        private bool PrestamoExists(int id)
        {
            return _context.Prestamos.Any(e => e.Id == id);
        }
    }
}
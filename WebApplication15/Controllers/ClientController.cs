using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryApp.DAL.Models;
using LibraryApp.DAL.Interfaces;
using AutoMapper;
using LibraryApp.Models;

namespace LibraryApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Clients")]
    public class ClientController : Controller
    {
        private readonly IUnitOfWork _context;
        private readonly IMapper _mapper;

        public ClientController(IUnitOfWork context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Clients
        [HttpGet]
        public IEnumerable<ClientView> GetClients()
        {
            var client = _context.Clients.GetAll();
            var mapperClient = _mapper.Map<IEnumerable<ClientView>>(client);
            return mapperClient;
        }

        // GET: api/Clients/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetClients([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var client = await _context.Clients.Get(id);

            if (client == null)
            {
                return NotFound();
            }

            var mapperClient = _mapper.Map<ClientView>(client);

            return Ok(mapperClient);
        }

        // PUT: api/Clients/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient([FromRoute] int id, [FromBody] ClientView client)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != client.Id)
            {
                return BadRequest();
            }

            var mapperClient = _mapper.Map<Client>(client);
            _context.Clients.Update(mapperClient);

            try
            {
                await _context.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: api/Clients
        [HttpPost]
        public async Task<IActionResult> PostClient([FromBody] ClientView client)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var mapperClient = _mapper.Map<Client>(client);
            _context.Clients.Create(mapperClient);
            await _context.Save();

            return Ok(client);
        }

        // DELETE: api/Clients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var client = await _context.Clients.Get(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Clients.Delete(client);
            await _context.Save();

            var mapperClient = _mapper.Map<ClientView>(client);

            return Ok(mapperClient);
        }
    }
}
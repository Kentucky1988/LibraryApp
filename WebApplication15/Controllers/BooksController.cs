using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryApp.DAL.Models;
using LibraryApp.DAL.Interfaces;
using AutoMapper;
using Library.Models;

namespace LibraryApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Books")]
    public class BooksController : Controller
    {
        private readonly IUnitOfWork _context;
        private readonly IMapper _mapper; 

        public BooksController(IUnitOfWork context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Books
        [HttpGet]
        public IEnumerable<BookView> GetBooks()
        {
            var book = _context.Books.GetAll();
            var mapperBook = _mapper.Map<IEnumerable<BookView>>(book);
            return mapperBook;
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBook([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var book = await _context.Books.Get(id);                      

            if (book == null)
            {
                return NotFound();
            }

            var mapperBook = _mapper.Map<BookView>(book);

            return Ok(mapperBook);
        }

        // PUT: api/Books/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook([FromRoute] int id, [FromBody] BookView book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != book.Id)
            {
                return BadRequest();
            }

            var mapperBook = _mapper.Map<Book>(book);
            _context.Books.Update(mapperBook);

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

        // POST: api/Books
        [HttpPost]
        public async Task<IActionResult> PostBook([FromBody] BookView book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var mapperBook = _mapper.Map<Book>(book);
            _context.Books.Create(mapperBook);
            await _context.Save();

            return CreatedAtAction("GetBook", new { id = book.Id }, book);
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var book = await _context.Books.Get(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Delete(book);
            await _context.Save();

            var mapperBook = _mapper.Map<BookView>(book);

            return Ok(mapperBook);
        }       
    }
}
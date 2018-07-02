using System.Collections.Generic;
using AutoMapper;
using Library.Models;
using LibraryApp.BLL.DTO;
using LibraryApp.BLL.Interfaces;
using LibraryApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers
{
    [Produces("application/json")]
    [Route("LibraryWork")]
    public class LibraryWorkController : Controller
    {
        private readonly ILibraryServices _context;
        private readonly IConverter _converter;
        private readonly IMapper _mapper;

        public LibraryWorkController(ILibraryServices context, IMapper mapper, IConverter converter)
        {
            _context = context;
            _converter = converter;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("AddNote")]
        public IActionResult AddNote([FromBody] MovementBooksView book)
        {
            var mapperBooks = _mapper.Map<TookAwayBookDTO>(book);
            _context.AddNote(mapperBooks);

            return Ok();
        }

        [HttpPut]
        [Route("ChangeNote")]
        public IActionResult ChangeNote([FromBody] MovementBooksView books)
        {
            var mapperBooks = _mapper.Map<ReturnBookDTO>(books);
            _context.ChangeNote(mapperBooks);

            return Ok();
        }

        [Route("BooksInLibrary")]
        public IEnumerable<BookView> BooksInLibrary()
        {
            var books = _context.BooksInLibrary();
            return _mapper.Map<IEnumerable<BookView>>(books);
        }

        [Route("BooksNotInLibrary")]
        public IEnumerable<BookReadingView> BooksNotInLibrary()
        {
            var books = _context.BooksNotInLibrary();
            return _mapper.Map<IEnumerable<BookReadingView>>(books);
        }

        [Route("ReadersBooks/{id}")]
        public IEnumerable<BookView> ReadersBooks(int id)
        {
            var books = _context.ReadersBooks(id);
            return _mapper.Map<IEnumerable<BookView>>(books);
        }

        [Route("FileReportReturnBooks")]
        public FileResult FileReportReturnBooks([FromBody] List<BookView> books)
        {
            var mapperBooks = _mapper.Map<List<BookDTO>>(books);
            var dataSet = _converter.ListToDataSet(mapperBooks);
            var memoryStream = _converter.DataSetToStreamExcel(dataSet);

            var contentType = "application/vnd.ms-excel;charset=UTF-8";

            return File(memoryStream, contentType);
        }

        [Route("FileReportTookAwayBooks")]
        public FileResult FileReportTookAwayBooks([FromBody] List<BookReadingView> books)
        {
            var mapperBooks = _mapper.Map<List<BookReadingDTO>>(books);
            var dataSet = _converter.ListToDataSet(mapperBooks);
            var memoryStream = _converter.DataSetToStreamExcel(dataSet);

            var contentType = "application/vnd.ms-excel;charset=UTF-8";

            return File(memoryStream, contentType);
        }
    }
}
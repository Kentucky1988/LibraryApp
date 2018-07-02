using AutoMapper;
using LibraryApp.BLL.DTO;
using LibraryApp.BLL.Interfaces;
using LibraryApp.DAL.Interfaces;
using LibraryApp.DAL.Models;
using System.Collections.Generic;
using System.Linq;

namespace LibraryApp.BLL.Services
{
    public class LibraryServices : ILibraryServices
    {
        private readonly IUnitOfWork _context;
        private readonly IMapper _mapper;
        private readonly IEnumerable<LibraryWork> _libraryWorks;
        private readonly IEnumerable<Client> _client;
        private readonly IEnumerable<Book> _books;

        public LibraryServices(IUnitOfWork context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
            _libraryWorks = _context.LibraryWorks.GetAll();
            _client = _context.Clients.GetAll();
            _books = _context.Books.GetAll();
        }

        public void AddNote(TookAwayBookDTO item)
        {
            var newItem = new LibraryWork
            {
                ActualDateReturn = null,
                PromiseDateReturn = item.Date,
                BookId = item.BookId,
                ClientId = item.ClientId
            };

            _context.LibraryWorks.Create(newItem);
            _context.Save();
        }

        public void ChangeNote(ReturnBookDTO item)
        {
            var note = _libraryWorks.Where(x => x.BookId == item.BookId)
                                    .Where(x => x.ClientId == item.ClientId)
                                    .Where(x => x.ActualDateReturn == null).First();

            note.ActualDateReturn = item.Date;

            _context.LibraryWorks.Update(note);
            _context.Save();
        }


        public IEnumerable<BookDTO> BooksInLibrary()
        {
            var booksInLibrary = new List<BookDTO>();

            foreach (var book in _books)
            {
                var bookInLibrary = _libraryWorks.ToList().FindLast(x => x.BookId == book.Id);

                if (bookInLibrary != null && bookInLibrary.ActualDateReturn != null)
                {
                    var mapperBookInLibrary = _mapper.Map<BookDTO>(bookInLibrary.Book);
                    booksInLibrary.Add(mapperBookInLibrary);
                }

                var mapperBook = _mapper.Map<BookDTO>(book);

                if (bookInLibrary == null)
                    booksInLibrary.Add(mapperBook);
            }

            return booksInLibrary;
        }

        public IEnumerable<BookReadingDTO> BooksNotInLibrary()
        {
            var booksNotInLibrary = new List<BookReadingDTO>();

            foreach (var book in _books)
            {
                var bookNotInLibrary = _libraryWorks.ToList().FindLast(x => x.BookId == book.Id);

                if (bookNotInLibrary != null && bookNotInLibrary.ActualDateReturn == null)
                {
                    BookReadingDTO bookReading = new BookReadingDTO
                    {
                        Name = bookNotInLibrary.Book.Name,
                        Author = bookNotInLibrary.Book.Author,
                        PromiseDateReturn = bookNotInLibrary.PromiseDateReturn,
                        ReaderFullName = _client.Where(x => x.Id == bookNotInLibrary.ClientId)
                                                .First().FullName
                    };

                    booksNotInLibrary.Add(bookReading);
                }
            }

            return booksNotInLibrary;
        }

        public IEnumerable<BookDTO> ReadersBooks(int id)
        {
            var booksReader = new List<BookDTO>();

            var records = _libraryWorks.Where(x => x.ClientId == id)
                                       .Where(x => x.ActualDateReturn == null);

            foreach (var record in records)
            {
                var book = _books.Where(x => x.Id == record.BookId).First();
                var mapperBook = _mapper.Map<BookDTO>(book);

                booksReader.Add(mapperBook);
            }

            return booksReader;
        }
    }
}

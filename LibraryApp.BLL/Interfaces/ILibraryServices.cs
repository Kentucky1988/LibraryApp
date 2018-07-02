using LibraryApp.BLL.DTO;
using System.Collections.Generic;
using System.IO;

namespace LibraryApp.BLL.Interfaces
{
    public interface ILibraryServices
    {
        void AddNote(TookAwayBookDTO item);
        void ChangeNote(ReturnBookDTO item);
        IEnumerable<BookDTO> BooksInLibrary();
        IEnumerable<BookReadingDTO> BooksNotInLibrary();
        IEnumerable<BookDTO> ReadersBooks(int id);
    }
}

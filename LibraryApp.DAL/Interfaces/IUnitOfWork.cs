using LibraryApp.DAL.Models;
using System.Threading.Tasks;

namespace LibraryApp.DAL.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository<Book> Books { get; }
        IRepository<Client> Clients { get; }
        IRepository<LibraryWork> LibraryWorks { get; }
        Task Save();       
    }
}

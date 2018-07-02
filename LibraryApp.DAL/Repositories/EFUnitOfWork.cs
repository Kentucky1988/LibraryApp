using LibraryApp.DAL.EF;
using LibraryApp.DAL.Interfaces;
using LibraryApp.DAL.Models;
using System.Threading.Tasks;

namespace LibraryApp.DAL.Repositories
{
    public class EFUnitOfWork : IUnitOfWork
    {
        private LibreryContext db;
        private BookRepository bookRepository;
        private ClientRepository clientRepository;
        private LibraryWorkRepository workRepository;

        public EFUnitOfWork(LibreryContext libreryContext)
        {
            db = libreryContext;
        }

        public IRepository<Book> Books => bookRepository ?? (bookRepository = new BookRepository(db));

        public IRepository<Client> Clients => clientRepository ?? (clientRepository = new ClientRepository(db));

        public IRepository<LibraryWork> LibraryWorks => workRepository ?? (workRepository = new LibraryWorkRepository(db));

        public async Task Save()
        {
            await db.SaveChangesAsync();
        }
    }
}

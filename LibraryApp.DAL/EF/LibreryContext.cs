using LibraryApp.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace LibraryApp.DAL.EF
{
    public class LibreryContext : DbContext
    {
        public LibreryContext(DbContextOptions<LibreryContext> options) : base(options) 
        {
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Client> Сlients { get; set; }
        public DbSet<LibraryWork> LibraryWorks { get; set; }
    }
}

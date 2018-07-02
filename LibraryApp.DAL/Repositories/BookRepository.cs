using LibraryApp.DAL.EF;
using LibraryApp.DAL.Interfaces;
using LibraryApp.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryApp.DAL.Repositories
{
    public class BookRepository : IRepository<Book>
    {
        private LibreryContext db;

        public BookRepository(LibreryContext context)
        {
            this.db = context;
        }       
       
        public IEnumerable<Book> GetAll()
        {
            return db.Books;
        }

        public async Task<Book> Get(int id)
        {
            return await db.Books.FindAsync(id);
        }

        public void Create(Book book)
        {
            db.Books.Add(book);
        }

        public void Update(Book book)
        {
            db.Entry(book).State = EntityState.Modified;
        }

        public void Delete(Book book)
        {
            db.Books.Remove(book);
        }
    }
}

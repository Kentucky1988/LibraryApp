using LibraryApp.DAL.EF;
using LibraryApp.DAL.Interfaces;
using LibraryApp.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryApp.DAL.Repositories
{
    class LibraryWorkRepository : IRepository<LibraryWork>
    {
        private LibreryContext db;

        public LibraryWorkRepository(LibreryContext context)
        {
            this.db = context;
        }

        public IEnumerable<LibraryWork> GetAll()
        {
            return db.LibraryWorks;
        }

        public async Task<LibraryWork> Get(int id)
        {
            return await db.LibraryWorks.FindAsync(id);
        }

        public void Create(LibraryWork librery)
        {
            db.LibraryWorks.Add(librery);
        }

        public void Update(LibraryWork librery)
        {
            db.Entry(librery).State = EntityState.Modified;
        }

        public void Delete(LibraryWork librery)
        {
            db.LibraryWorks.Remove(librery);
        }
    }
}

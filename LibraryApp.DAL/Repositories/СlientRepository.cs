using LibraryApp.DAL.EF;
using LibraryApp.DAL.Interfaces;
using LibraryApp.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryApp.DAL.Repositories
{
    public class ClientRepository : IRepository<Client>
    {
        private LibreryContext db;

        public ClientRepository(LibreryContext context)
        {
            this.db = context;
        }

        public IEnumerable<Client> GetAll()
        {
            return db.Сlients;
        }

        public async Task<Client> Get(int id)
        {
            return await db.Сlients.FindAsync(id);
        }

        public void Create(Client сlient)
        {
            db.Сlients.Add(сlient);
        }

        public void Update(Client сlient)
        {
            db.Entry(сlient).State = EntityState.Modified;
        }

        public void Delete(Client сlient)
        {
            db.Сlients.Remove(сlient);
        }
    }
}

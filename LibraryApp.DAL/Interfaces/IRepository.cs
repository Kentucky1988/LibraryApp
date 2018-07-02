using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryApp.DAL.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        Task<T> Get(int id);
        void Create(T item);
        void Update(T item);
        void Delete(T item);
    }
}

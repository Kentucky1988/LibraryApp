using AutoMapper;
using LibraryApp.BLL.DTO;
using LibraryApp.DAL.Models;

namespace LibraryApp.BLL.Automapper
{
    public class AutomapperProfileBLL : Profile
    {
        public AutomapperProfileBLL()
        {
            CreateMap<Book, BookDTO>().ReverseMap();
        }      
    }
}

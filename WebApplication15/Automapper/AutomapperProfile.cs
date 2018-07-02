using AutoMapper;
using Library.Models;
using LibraryApp.BLL.DTO;
using LibraryApp.DAL.Models;
using LibraryApp.Models;

namespace LibraryApp.Automapper
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Book, BookView>().ReverseMap();
            CreateMap<BookView, Book>().ReverseMap();

            CreateMap<Client, ClientView>().ReverseMap();
            CreateMap<ClientView, Client>().ReverseMap();

            CreateMap<MovementBooksView, TookAwayBookDTO>().ReverseMap();
            CreateMap<MovementBooksView, ReturnBookDTO>().ReverseMap();
            CreateMap<BookDTO, BookView>().ReverseMap();
            CreateMap<BookView, BookDTO>().ReverseMap();
            CreateMap<BookReadingDTO, BookReadingView>().ReverseMap();
            CreateMap<BookReadingView, BookReadingDTO> ().ReverseMap();
        }
    }
}

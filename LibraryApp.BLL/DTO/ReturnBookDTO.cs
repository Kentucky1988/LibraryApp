using System;

namespace LibraryApp.BLL.DTO
{
    public class ReturnBookDTO
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int BookId { get; set; }
        public int ClientId { get; set; }
    }
}

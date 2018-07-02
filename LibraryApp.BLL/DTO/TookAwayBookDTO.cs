using System;

namespace LibraryApp.BLL.DTO
{
    public class TookAwayBookDTO
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int BookId { get; set; }
        public int ClientId { get; set; }
    }
}

using System;

namespace LibraryApp.Models
{
    public class MovementBooksView
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int BookId { get; set; }
        public int ClientId { get; set; }
    }
}

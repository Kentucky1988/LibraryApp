using System;

namespace LibraryApp.BLL.DTO
{
    public class BookReadingDTO
    {
        public string Name { get; set; }
        public string Author { get; set; }
        public string ReaderFullName { get; set; }
        public DateTime PromiseDateReturn { get; set; }
    }
}

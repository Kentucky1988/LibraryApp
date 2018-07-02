using System;

namespace LibraryApp.Models
{
    public class BookReadingView
    {
        public string Name { get; set; }
        public string Author { get; set; }
        public string ReaderFullName { get; set; }
        public DateTime PromiseDateReturn { get; set; }
    }
}

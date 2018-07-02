using System;
using System.Collections.Generic;

namespace LibraryApp.DAL.Models
{
    public class LibraryWork
    {
        public int Id { get; set; }
        public DateTime PromiseDateReturn { get; set; }
        public DateTime? ActualDateReturn { get; set; }

        public int BookId { get; set; }
        public Book Book { get; set; }

        public int ClientId { get; set; }
        public Client Client { get; set; }       
    }
}

using System.ComponentModel.DataAnnotations;

namespace LibraryApp.DAL.Models
{
    public class Book
    {
        public int Id { get; set; }

        [Required, StringLength(50)]
        public string Name { get; set; }

        [Required, StringLength(50)]
        public string Author { get; set; }
    }
}

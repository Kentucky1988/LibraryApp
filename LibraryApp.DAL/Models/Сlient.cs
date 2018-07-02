using System.ComponentModel.DataAnnotations;

namespace LibraryApp.DAL.Models
{
    public class Client
    {
        public int Id { get; set; }

        [Required, StringLength(50)]
        public string FullName { get; set; }
    }
}

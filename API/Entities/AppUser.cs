
namespace API.Entities
{
    public class AppUser
    {
        public int AppUserId { get; set; }
        public int RoleId { get; set; }
        public int PersonId { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public bool IsDeleted { get; set; }
    }
}
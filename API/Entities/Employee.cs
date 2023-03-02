
namespace API.Entities
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public string email { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
    }
}
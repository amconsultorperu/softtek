

using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<Employee> AddEmployee(Employee employee);
        void Update(Employee employee);
        Task<bool> SaveAllAsync();
        Task<Employee> GetEmployeeByIdAsync(int id);
        Task<Employee> GetEmployeeByAsync(string employeeName);
        Task<PagedList<EmployeeDto>> GetEmployeesAsync(EmployeeParams employeeParams);
    }
}
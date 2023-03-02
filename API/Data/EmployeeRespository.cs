using System.Linq;
using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public EmployeeRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Employee> AddEmployee(Employee employee)
        {
            employee.IsDeleted = false;
            var addedEmployee = await _context.Employees.AddAsync(employee);
            if (_context.SaveChanges() > 0) return employee;
            return null;
        }

        public async Task<Employee> GetEmployeeByAsync(string employeeName)
        {
            return await _context.Employees.SingleOrDefaultAsync(x => x.Name == employeeName);
        }

        public Task<Employee> GetEmployeeByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<PagedList<EmployeeDto>> GetEmployeesAsync(EmployeeParams employeeParams)
        {
            var query =
                   (from employee in _context.Employees
                    where employee.IsDeleted == false
                    select new EmployeeDto
                    {
                        EmployeeId = employee.EmployeeId,
                        Name = employee.Name,
                        Email = employee.email
                    }
                   ).AsNoTracking()
                   .AsQueryable();

            if (!string.IsNullOrEmpty(employeeParams.Name))
                query = query.Where(d => d.Name == employeeParams.Name);


            return await PagedList<EmployeeDto>.CreateAsync(query, employeeParams.PageNumber, employeeParams.PageSize);
        }

        public Task<bool> SaveAllAsync()
        {
            throw new NotImplementedException();
        }

        public void Update(Employee employee)
        {
            throw new NotImplementedException();
        }
    }
}
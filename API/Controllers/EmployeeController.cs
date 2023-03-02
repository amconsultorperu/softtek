using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class EmployeeController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(DataContext context, IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeDto>>> GetEmployees([FromQuery] EmployeeParams employeeParams)
        {
            var employees = await _employeeRepository.GetEmployeesAsync(employeeParams);

            Response.AddPaginationHeader(employees.CurrentPage, employees.PageSize, employees.TotalCount, employees.TotalPages);

            return Ok(employees);
        }

        [HttpPost]
        public async Task<ActionResult> AddEmployee(Employee employee)
        {
            var existEmployee = await _employeeRepository.GetEmployeeByAsync(employee.Name);
            if (existEmployee != null) return BadRequest("El empleado ya existe");

            var addedEmployee = await _employeeRepository.AddEmployee(employee);

            return Ok(addedEmployee);
        }

    }
}
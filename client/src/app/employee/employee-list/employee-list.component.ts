import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeParams } from '../../_models/employeeParams';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  storeParams: EmployeeParams = new EmployeeParams('');
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.storeParams.employeeName = '';
    this.employeeService
      .getEmployees(this.storeParams)
      .subscribe((response) => {
        console.log('employee', response);
      });
  }
}

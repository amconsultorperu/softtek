import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';

export const employeeRoutes = [
  {
    path: 'list',
    component: EmployeeListComponent,
  },
];

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [CommonModule, RouterModule.forChild(employeeRoutes)],
})
export class EmployeeModule {}

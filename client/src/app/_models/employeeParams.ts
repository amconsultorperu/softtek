export class EmployeeParams {
  pageNumber = 1;
  pageSize = 10;
  employeeName: string;

  constructor(employeeName: string) {
    this.employeeName = employeeName || '';
  }
}

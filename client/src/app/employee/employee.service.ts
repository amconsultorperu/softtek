import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../_models/employee';
import { EmployeeParams } from '../_models/employeeParams';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = environment.apiUrl;
  stores: Employee[] = [];
  constructor(private http: HttpClient) {}

  getEmployees(employeeParams: EmployeeParams) {
    let params = this.getPaginationHeaders(
      employeeParams.pageNumber,
      employeeParams.pageSize
    );

    params = params.append('name', employeeParams.employeeName.toString());

    return this.getPaginatedResult<Employee[]>(
      this.baseUrl + 'employee',
      params
    );
  }

  private getPaginatedResult<T>(url: string, params: any) {
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();

    return this.http.get<T>(url, { observe: 'response', params }).pipe(
      map((response: any) => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
          paginatedResult.pagination = JSON.parse(
            response.headers.get('Pagination')
          );
        }
        return paginatedResult;
      })
    );
  }

  private getPaginationHeaders(pageNumber: Number, pageSize: number) {
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
  }
}

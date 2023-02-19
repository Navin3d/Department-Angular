import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import Employee from '../models/Employee';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080/restservice/api";
  }

  login(loginData: any): Observable<any> {
    console.log(loginData);
    return this.http.post(this.baseUrl + "/login", loginData);
  }

  /*=============================================================================
  ====================== DEPARTMENT SERVICE =======================================
  =============================================================================*/

  getAllDepartments(): Observable<any> {
    return this.http.get(this.baseUrl + "/departments");
  }

  getDepartments(id: number): Observable<Object> {
    return this.http.get(this.baseUrl + "/departments" + `/${id}`);
  }

  postDepartments(data: any): Observable<Object> {
    return this.http.post(this.baseUrl + "/departments", data);
  }

  putDepartments(id: number, data: any): Observable<Object> {
    return this.http.put(this.baseUrl + "/departments" + `/${id}`, data);
  }

  deleteDepartments(id: number): Observable<Object> {
    return this.http.delete(this.baseUrl + "/departments" + `/${id}`);
  }

  /*=============================================================================
  ====================== EMPLOYEE SERVICE =======================================
  =============================================================================*/

  getAllEmployees(): Observable<any> {
    return this.http.get(this.baseUrl + "/employees");
  }

  getEmployees(id: number): Observable<Object> {
    return this.http.get(this.baseUrl + "/employees" + `/${id}`);
  }

  postEmployees(data: any): Observable<Object> {
    return this.http.post(this.baseUrl + "/employees", data);
  }

  putEmployees(id: number, data: any): Observable<Object> {
    return this.http.put(this.baseUrl + "/employees" + `/${id}`, data);
  }

  deleteEmployees(id: number): boolean {
    console.log("Deleting Employee: " + id);
    try {
      this.http.delete(this.baseUrl + "/employees/" + id).subscribe();
      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

}

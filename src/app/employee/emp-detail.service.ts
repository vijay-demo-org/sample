import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpDetailService {

  constructor(private http : HttpClient) { }

  public getEmployeeData() {
    return this.http.get("http://localhost:8080/employee/all");
  }


}

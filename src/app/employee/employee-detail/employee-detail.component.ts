import { Component, OnInit } from '@angular/core';
import { EmpDetailService } from '../emp-detail.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private empService : EmpDetailService) { 
    this.empService.getEmployeeData().subscribe((data : any)=>{
      console.log('Following are the employee data....');
      console.log(data);
      this.employee = data.employees;
    });
  }

  public employee : any = [
    {id: 1, name: "name 1", address: "address 1"},
    {id: 2, name: "name 2", address: "address 2"},
    {id: 3, name: "name 3", address: "address 3"},
    {id: 4, name: "name 4", address: "address 4"} 
  ];

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/interface/Employee';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.Read();
    // console.log("ngOnInit:"  )
  }

  // others
  public Read(): void {
    this.employeeService.Read().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log("data:" , this.employees)
      },
      (error: HttpErrorResponse) => {
        console.log("this.employeeService.Read error:")
      }
    )
  }


} 

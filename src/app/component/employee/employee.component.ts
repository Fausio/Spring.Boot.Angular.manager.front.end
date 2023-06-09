import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/interface/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[] = [];
  public SelectedEmployee?: Employee;

  constructor(private EmployeeService: EmployeeService) {

  }

  Read(): void {
    this.EmployeeService.Read().subscribe(
      (response: Employee[]) => {
        
        





















































































































































































































































































        
      },
      (error: HttpErrorResponse) => {
        console.log("erro in EmployeeComponent.Read()", error.message)
      }
    )
  }

  OnCreate(model: NgForm): void {

    this.EmployeeService.Create(model.value).subscribe(
      (response: Employee) => {
        this.Read();
      }, (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

    document.getElementById('closeAddEmployeeModal')?.click();
  }

  OnUpdate(model: Employee): void {

    this.EmployeeService.Update(model).subscribe(
      (response: Employee) => {
        this.Read();
      }, (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )


  }

  OnDelete(modelId: any): void {

    this.EmployeeService.Delete(modelId).subscribe(
      (response: Employee) => {
        this.Read();
      }, (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
    document.getElementById('closeDeleteEmployeeModal')?.click();
  }

  ngOnInit() {
    this.Read();
  }

  public openModal(model?: any, mode?: String) {

    const mainDiv = document.getElementById("employeesRow"); // will receive the btn of the modal

    const btn = document.createElement('button'); // btn of the modal
    btn.type = 'button' // to remve submit event (to be a simple btn)
    btn.style.display = 'none'; // hide de btn
    btn.setAttribute('data-toggle', 'modal') // necessary for pop up works

    if (model != null) {
      this.SelectedEmployee = model;
    }

    if (mode === 'createEmployee') {
      btn.setAttribute('data-target', '#createEmployee');
    }
    if (mode === 'updateEmployee') {
      btn.setAttribute('data-target', '#updateEmployee');
    }
    if (mode === 'deleteEmployee') {
      btn.setAttribute('data-target', '#deleteEmployee');
    }

    mainDiv?.appendChild(btn);
    btn.click();
  }

}

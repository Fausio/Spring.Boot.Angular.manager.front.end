import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';  
import {EmployeeComponent} from './component/employee/employee.component'

@NgModule({
  declarations: [
    AppComponent, 
    EmployeeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,EmployeeComponent]
})
export class AppModule { }

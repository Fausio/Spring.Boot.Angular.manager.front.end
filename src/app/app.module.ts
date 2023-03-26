import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Employee } from './interface/Employee';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeService } from './service/employee.service';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService,  ],
  bootstrap: [AppComponent]
})
export class AppModule {




  
}

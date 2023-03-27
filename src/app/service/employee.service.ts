import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interface/Employee';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    private backEndServerUrl =  environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public Read(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.backEndServerUrl}/employee/read`)
    }
    public ReadById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.backEndServerUrl}/employee/read/` + id)
    }
    public Create(model: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.backEndServerUrl}/employee/create`, model)
    }
    public Update(model: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.backEndServerUrl}/employee/update`, model)
    }
    public Delete(id: number): Observable<Employee> {
        return this.http.delete<Employee>(`${this.backEndServerUrl}/employee/delete/` + id)
    }

}

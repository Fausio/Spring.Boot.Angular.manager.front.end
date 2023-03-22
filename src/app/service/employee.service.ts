import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class EmployeeService{

    private backEndServerUrl = 'localhost:8080';

    constructor(private http: HttpClient){}

    public Read(): Observable<any>{
        return this.http.get<any>(`${this.backEndServerUrl}/employee/read`)
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class EmployeeService {

api="http://localhost:3000/employees";

constructor(private http:HttpClient){}

getEmployees(){
return this.http.get(this.api);
}

getEmployee(id:any){
return this.http.get(this.api+"/"+id);
}

addEmployee(data:any){
return this.http.post(this.api,data);
}

updateEmployee(id:any,data:any){
return this.http.put(this.api+"/"+id,data);
}

deleteEmployee(id:any){
return this.http.delete(this.api+"/"+id);
}

}
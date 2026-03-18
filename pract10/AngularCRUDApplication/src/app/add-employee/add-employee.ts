import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee';

@Component({
selector:'app-add-employee',
standalone:true,
imports:[FormsModule],
templateUrl:'./add-employee.html',
styleUrls:['./add-employee.css']
})

export class AddEmployee{

employee:any={};

constructor(private service:EmployeeService,
private router:Router){}

save(){

this.service.addEmployee(this.employee)
.subscribe(()=>{

alert("Employee Added");

this.router.navigate(['/']);

})

}

}
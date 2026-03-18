import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from '../service/employee';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-edit-employee',
standalone:true,
imports:[FormsModule],
templateUrl:'./edit-employee.html'
})

export class EditEmployee implements OnInit{

employee:any={};
id:any;

constructor(
private route:ActivatedRoute,
private service:EmployeeService,
private router:Router
){}

ngOnInit(){

this.id=this.route.snapshot.params['id'];

this.service.getEmployee(this.id)
.subscribe((data:any)=>{

this.employee=data;

})

}

update(){

this.service.updateEmployee(this.id,this.employee)
.subscribe(()=>{

alert("Employee Updated");

this.router.navigate(['/'])

})

}

}
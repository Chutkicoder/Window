import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-home',
standalone:true,
imports:[RouterModule,CommonModule],
templateUrl:'./home.html',
styleUrls:['./home.css']
})

export class Home implements OnInit{

employees:any=[];

constructor(private service:EmployeeService){}

ngOnInit(){
this.loadEmployees();
}

loadEmployees(){
this.service.getEmployees().subscribe((data:any)=>{
this.employees=data;
})
}

}
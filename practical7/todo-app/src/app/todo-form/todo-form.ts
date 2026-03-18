import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrls: ['./todo-form.css']
})
export class TodoForm {

  title:string = "";

  constructor(private todoService:TodoService){}

  addTodo(){
    if(this.title.trim() !== ""){
      this.todoService.addTodo({
        title:this.title,
        completed:false
      });

      this.title="";
    }
  }

}
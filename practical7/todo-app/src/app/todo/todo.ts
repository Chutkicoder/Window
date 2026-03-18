import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { TodoForm } from '../todo-form/todo-form';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoForm],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {

  todos:any[] = [];

  constructor(private todoService:TodoService){
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(index:number){
    this.todoService.deleteTodo(index);
  }

}
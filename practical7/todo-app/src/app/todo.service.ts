import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    { title: 'Learn Angular', completed: false },
    { title: 'Build Todo App', completed: false }
  ];

  getTodos(){
    return this.todos;
  }

  addTodo(todo:any){
    this.todos.push(todo);
  }

  deleteTodo(index:number){
    this.todos.splice(index,1);
  }

}
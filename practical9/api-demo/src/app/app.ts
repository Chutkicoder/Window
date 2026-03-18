import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.html'
})
export class App implements OnInit {

  users: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}








//npm install -g @angular/cli
//ng new api-demo
//ng serve -o
//After running this Ctrl+s on app.html the the output will show
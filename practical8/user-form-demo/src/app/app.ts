import { Component } from '@angular/core';
import { UserForm } from './user-form/user-form';

@Component({
  selector: 'app-root',
  imports: [UserForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}













/*cd AngularCRUDApplication
npm install
Case:   npm install -g json-server
Case:   json-server --watch db.json --port 3000
ng serve -o*/
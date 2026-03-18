import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AddEmployee } from './add-employee/add-employee';
import { EditEmployee } from './edit-employee/edit-employee';

export const routes: Routes = [

  { path: '', component: Home },
  { path: 'add', component: AddEmployee },
  { path: 'edit/:id', component: EditEmployee }

];
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TippingComponent } from './components/tipping/tipping.component';
import { TodoComponent } from './components/todo/todo.component';


const routes: Routes = [
  {
    path: 'tipping',
    component: TippingComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

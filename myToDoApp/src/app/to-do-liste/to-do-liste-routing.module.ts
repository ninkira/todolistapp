import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoListePage } from './to-do-liste.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoListePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoListePageRoutingModule {}

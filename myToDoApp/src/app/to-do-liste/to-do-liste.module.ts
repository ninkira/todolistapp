import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoListePageRoutingModule } from './to-do-liste-routing.module';

import { ToDoListePage } from './to-do-liste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoListePageRoutingModule
  ],
  declarations: [ToDoListePage]
})
export class ToDoListePageModule {}

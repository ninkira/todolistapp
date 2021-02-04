import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-liste',
  templateUrl: './to-do-liste.page.html',
  styleUrls: ['./to-do-liste.page.scss'],
})
export class ToDoListePage implements OnInit {
  /*
  Funktionsweise des Skriptes: 
   1. Auslesen des Inputfeldes für den Aufgabenamen 
   2. Speichern des Aufgabenamen als neues Element in Liste bzw. Array
   3. Generation von neuen Listenelementen im Front-End mithilfe von Array
  */

  aufgabeName: string = "";
  toDoItems: any = [];

  constructor() {

  }

  ngOnInit() {

  }
  // Testfunktion :)
  openToDoPanel() {
    console.log("Test");
  }

  // Funktion um To-Dos hinzuzufügen
  addToDo() {

    // Quelle: https://stackoverflow.com/questions/48253103/how-to-get-input-text-value-in-ionic 
    // Log um zu schauen, was der Browser aus dem Inputfeld ausliest
    // console.log("Aufgabenname to add: " + this.aufgabeName);

    // hinzufügen des Wertes in den Array, der die Aufgaben insgesamt speichert
    this.toDoItems.push(this.aufgabeName);
    // um das input feld zu clearen
    this.aufgabeName = "";
  }

  // Funktion zum löschen der Aufgabe
  removeItem(item) {

    // console.log("item: " + item);
    // Löschung des Elementes aus dem Array (sozusagen Gegeneteil zur Push Funktion)
    this.toDoItems.splice(this.toDoItems.indexOf(item), 1)
  }
}

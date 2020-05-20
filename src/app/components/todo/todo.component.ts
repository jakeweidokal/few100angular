import { Component, OnInit } from '@angular/core';
import { TodoItem } from './models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  items: TodoItem[] = [
    { description: 'Pull weeds', completed: true },
    { description: 'Drink that soda', completed: false }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(descriptionEl: HTMLInputElement) {
    this.items = [{ description: descriptionEl.value, completed: false }, ...this.items];
    descriptionEl.value = '';
    descriptionEl.focus();
  }

  markComplete(item: TodoItem) {
    item.completed = true;
  }

  get hasCompletedItems() {
    return this.items.some(item => item.completed);
  }

  removeCompletedItems() {
    this.items = this.items.filter(item => !item.completed);
  }

}

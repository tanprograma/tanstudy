import { Component, Input } from '@angular/core';
import { Plan } from 'src/interfaces';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() item!: Plan;
  expanded = false;
  toggleView() {
    this.expanded = !this.expanded;
  }
}

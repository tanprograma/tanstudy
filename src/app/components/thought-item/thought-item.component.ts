import { Component, Input } from '@angular/core';
import { Thought } from 'src/interfaces';
@Component({
  selector: 'app-thought-item',
  templateUrl: './thought-item.component.html',
  styleUrls: ['./thought-item.component.css'],
})
export class ThoughtItemComponent {
  @Input() item!: Thought;
  expanded = false;
  toggleView() {
    this.expanded = !this.expanded;
  }
}

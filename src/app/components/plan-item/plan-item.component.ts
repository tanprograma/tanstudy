import { Component, Input } from '@angular/core';
import { Diary, Plan } from 'src/interfaces';
@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css'],
})
export class PlanItemComponent {
  @Input() item!: Plan;
  expanded = false;
  toggleView() {
    this.expanded = !this.expanded;
  }
}

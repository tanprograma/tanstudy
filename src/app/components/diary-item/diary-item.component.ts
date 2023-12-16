import { Component, Input } from '@angular/core';
import { Diary } from 'src/interfaces';

@Component({
  selector: 'app-diary-item',
  templateUrl: './diary-item.component.html',
  styleUrls: ['./diary-item.component.css'],
})
export class DiaryItemComponent {
  @Input() item!: { date: string; entries: Diary[] };
  expanded = false;
  toggleView() {
    this.expanded = !this.expanded;
  }
}

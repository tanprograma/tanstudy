import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css'],
})
export class ViewItemComponent {
  @Input() items: any;
}

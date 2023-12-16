import { Component, Input } from '@angular/core';
import { Review } from 'src/interfaces';
@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css'],
})
export class ReviewItemComponent {
  @Input() item!: Review;
  expanded = false;
  toggleView() {
    this.expanded = !this.expanded;
  }
}

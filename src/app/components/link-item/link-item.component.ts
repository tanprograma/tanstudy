import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css'],
})
export class LinkItemComponent {
  @Input() link!: { name: string; url: string };
  @Input() style: any;
}

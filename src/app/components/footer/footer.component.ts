import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  developer: string = 'kija mnada publishing LLC';
  date: number = new Date().getFullYear();
}

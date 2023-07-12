import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
})
export class MainNavigationComponent {
  homeIcon = faHome;
}

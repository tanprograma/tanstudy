import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Navigation } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
})
export class MainNavigationComponent {
  constructor(private loginService: LoginService, private router: Router) {}
  logout() {
    this.loginService.logout();
  }
}

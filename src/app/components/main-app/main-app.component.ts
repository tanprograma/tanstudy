import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css'],
})
export class MainAppComponent {
  constructor(private loginService: LoginService, private router: Router) {}
  beginJourney() {
    if (this.loginService.loggedin) {
      this.router.navigate(['/app/questions']);
      return;
    }
    this.router.navigate(['/login']);
  }
}

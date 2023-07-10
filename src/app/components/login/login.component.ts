import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = false;
  username: string = '';
  password: string = '';
  constructor(public loginService: LoginService, private router: Router) {}
  ngOnInit(): void {}
  login() {
    // console.log({ username: this.username, password: this.password });
    this.loginService
      .login({ username: this.username, password: this.password })
      .subscribe((user) => {
        this.router.navigate(['/app/questions']);
        console.log({ user });
      });
  }
  signin() {
    // console.log({ username: this.username, password: this.password });
    this.loginService
      .signin({ username: this.username, password: this.password })
      .subscribe((user) => {
        this.router.navigate(['/app/questions']);
        console.log({ user });
      });
  }
  logout() {
    this.loginService.loggedin = false;
  }

  toggleLogin() {
    this.user = !this.user;
  }
}

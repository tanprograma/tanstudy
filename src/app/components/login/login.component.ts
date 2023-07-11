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
  isLoading = false;
  username: string = '';
  password: string = '';
  alias: string = 'admin';
  constructor(public loginService: LoginService, private router: Router) {}
  ngOnInit(): void {}
  login() {
    // console.log({ username: this.username, password: this.password });
    this.isLoading = true;
    this.loginService
      .login({ username: this.username, password: this.password })
      .subscribe((user) => {
        this.loginService.user.alias = user.alias;
        this.redirect();
        console.log({ user });
      });
  }
  signin() {
    // console.log({ username: this.username, password: this.password });
    this.isLoading = true;
    this.loginService
      .signin({
        username: this.username,
        password: this.password,
        alias: this.alias,
      })
      .subscribe((user) => {
        this.loginService.user.alias = user.alias;
        this.redirect();
        console.log({ user });
      });
  }
  logout() {
    this.loginService.loggedin = false;
  }

  toggleLogin() {
    this.user = !this.user;
  }
  redirect() {
    if (this.loginService.loggedin) {
      this.isLoading = false;
      this.router.navigate(['/app/questions']);

      return;
    }
    this.router.navigate(['/app/questions']);
  }
}

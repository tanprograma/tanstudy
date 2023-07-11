import { Component } from '@angular/core';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
  userIcon = faUser;
  constructor(public login: LoginService) {}
}

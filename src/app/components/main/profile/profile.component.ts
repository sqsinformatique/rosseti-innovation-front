import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  logout() {
    this.loginService.logout();
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
  styles: [`
    em { float: right; color: #E05E65; padding-left: 10px; }
  `]
})
export class LoginComponent {
  userName: string
  password: string
  mouseOverSubmit: boolean = false

  constructor (private auth: AuthService, private router: Router) {}

  login (submitted) {
    this.auth.loginUser(submitted.userName, submitted.password)
    this.router.navigate(['events'])
  }

  cancel () {
    this.router.navigate(['events'])
  }
}
import { Component, OnInit, Inject } from '@angular/core'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'
import { TOASTR_TOKEN, Toastr } from "../common/toastr.service";

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styles: [`
    em { float: right; color: #E05E65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  firstName: FormControl
  lastName: FormControl

  constructor (
    private auth: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit () {
    const user = this.auth.getUser()

    this.firstName = new FormControl(
      user.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    )
    this.lastName = new FormControl(user.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile (userProfile) {
    if (this.profileForm.valid) {
      this.auth.setUser(userProfile.firstName, userProfile.lastName)
      // this.router.navigate(['events'])
      this.toastr.success('Profile saved!')
    }
  }

  cancel () {
    this.router.navigate(['events'])
  }

  isFieldValid (fieldName: string): boolean {
    return this[fieldName].valid || this[fieldName].untouched
  }
}

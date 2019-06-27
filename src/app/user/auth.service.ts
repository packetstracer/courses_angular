import { Injectable } from '@angular/core'

import { IUser } from './user.model'

@Injectable()
export class AuthService {
  currentUser: IUser

  loginUser (userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Ivan',
      lastName: 'Merin',
      userName: 'imerinro'
    }
  }

  logoutUser () {
    this.currentUser = null
  }

  isAuthenticated (): boolean {
    return !!this.currentUser
  }

  getUser (): IUser {
    return this.currentUser
  }

  setUser (firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }
}
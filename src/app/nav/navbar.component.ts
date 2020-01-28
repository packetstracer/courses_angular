import { Component } from '@angular/core'

import { AuthService } from '../user/auth.service'
import { EventService } from '../events/shared/event.service'

import { ISession } from '../events/shared/event.model'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    nav.navbar { font-size: 15px; }
    .searchForm { margin-right: 100px; }
    @media (max-width: 1200px) { #searchForm { display: none; } }
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {
  searchTerm: string = ''
  private foundSessions: ISession[] = []

  constructor (private auth: AuthService, private events: EventService) {}

  searchSessions (searchTerm: string) {
    this.events.searchSessions(searchTerm).subscribe(
      (sessions: ISession[]) => {
        this.foundSessions = sessions
        console.log(sessions)
      }
    )
  }
}
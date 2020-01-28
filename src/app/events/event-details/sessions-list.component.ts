import { Component, Input, OnChanges } from '@angular/core'

import { ISession } from '../shared/event.model'

@Component({
  selector: 'sessions-list',
  templateUrl: './sessions-list.component.html'
})
export class SessionsListComponent implements OnChanges {
  @Input() sessions: ISession[]
  @Input() filterBy: string
  @Input() sortBy: string

  filteredSessions: ISession[]

  ngOnChanges () {
    const filterFunction = this.sortBy === 'name' ? 'sortByName' : 'sortByVotes'

    this.filteredSessions = this.filterSessions(this.filterBy).sort(this[filterFunction])
  }

  filterSessions (filter: string): ISession[] {
    return this.sessions.filter(
      session => filter === 'all' || session.level.toLowerCase() === filter
    )
  }

  sortByName (session1: ISession, session2: ISession): number {
    if (session1.name > session2.name) {
      return 1
    }
    else if (session1.name === session2.name) {
      return 0
    }
    else {
      return -1
    }
  }

  sortByVotes (session1: ISession, session2: ISession): number {
    return session2.voters.length - session1.voters.length
  }
}

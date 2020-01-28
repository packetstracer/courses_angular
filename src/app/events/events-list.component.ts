import { Component, OnInit } from '@angular/core'
import { RouterStateSnapshot, ActivatedRoute } from '@angular/router'

import { EventService } from './shared/event.service'

import { IEvent } from './shared/event.model'

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[] = []

  constructor (
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.events = this.route.snapshot.data.events
  }

  handleClickEvent (eventName: string) {
    // this.toastrService.success(eventName)
  }
}

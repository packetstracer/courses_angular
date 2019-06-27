import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service'
import { IEvent } from '../shared/event.model'

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 120px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  private event: IEvent

  constructor (private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit () {
    this.event = this.eventService.getEvent(Number(this.route.snapshot.params['id']))
  }
}
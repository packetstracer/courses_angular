import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 120px;
      }
      .session-details__add-link {
        float: right;
        cusror: pointer;
        padding-left: 10px;
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  private event: IEvent;
  private addMode: boolean = false;
  private filterBy: string = 'all';
  private sortBy: string = 'name';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(
      Number(this.route.snapshot.params['id'])
    );
  }

  goToCreateSession(eventId: number) {
    this.addMode = true;
  }

  saveEventSession(session: ISession) {
    this.eventService.saveEventSession(this.route.snapshot.params.id, session);
    this.addMode = false;
  }

  cancelSaveEventSession() {
    this.addMode = false;
  }
}

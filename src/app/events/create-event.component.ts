import { Component } from "@angular/core"
import { Router } from '@angular/router'

import { IEvent } from './shared/event.model'
import { EventService } from './shared/event.service';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styles: [`
    em { float: right; color: #E05E65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
  isDirty: boolean = true

  constructor (private router: Router, private events: EventService) {}

  saveEvent (formValues: IEvent) {
    this.events.saveEvent(formValues)
    this.router.navigate(['/events'])
  }

  cancel () {
    this.router.navigate(['/events'])
  }
}
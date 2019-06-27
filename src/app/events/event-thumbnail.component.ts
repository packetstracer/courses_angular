import { Component, Input } from '@angular/core'

import { IEvent } from './shared/event.model'

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .green { color: #003300 !important; },
    .bold { font-weight: bolder; }.green { color: #003300 !important; },
    .bold { font-weight: bolder; },
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb }
    .thumbnail { min-height: 210px; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent

  getStartTimeCssClasses () {
    const isEarlyStart = this.event.time === '8:00 am'

    return { green: isEarlyStart, bold: isEarlyStart }
  }
}
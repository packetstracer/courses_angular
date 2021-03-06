import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { CreateSessionComponent } from './events/event-details/create-session.component'
import { SessionsListComponent } from './events/event-details/sessions-list.component'
import { CollabsibleWellComponent } from './common/collapsible-well.component'
import { SimpleModalComponent } from './common/simple-modal.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/error404.component'

import { DurationPipe } from './common/duration.pipe'

import { EventService } from './events/shared/event.service'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service'
import { JQUERY_TOKEN } from "./common/jquery.service";
import { AuthService } from './user/auth.service'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/event-list-resolver.component'

import { appRoutes } from "./routes"

let toastr: Toastr = window['toaster']
let jQuery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionsListComponent,
    CollabsibleWellComponent,
    SimpleModalComponent,
    NavBarComponent,
    Error404Component,

    DurationPipe
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    AuthService,
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule {}

export function checkDirtyState (component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Are you sure you want to leave the page?')
  }

  return true
}


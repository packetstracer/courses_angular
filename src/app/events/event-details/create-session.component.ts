import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router'

import { ISession, IEvent } from '../shared/event.model'

@Component({
  selector: 'create-session',
  templateUrl: 'create-session.component.html'
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup

  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl

  constructor (private fb: FormBuilder, private router: Router) {}

  ngOnInit () {
    this.newSessionForm = this.fb.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', [Validators.required, Validators.maxLength(400)]]
    })
  }

  createEventSession (formValues: any) {
    console.log(formValues)
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }

    // this.router.navigate(['evemnts'])
  }

  cancel () {
    this.router.navigate(['evemnts'])
  }
}
import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'

import { ISession } from '../shared/event.model'

@Component({
  selector: 'create-session',
  templateUrl: 'create-session.component.html',
  styles: [`
    em { float: right; color: #E05E65; padding-left: 10px; }
    .error input, .error select, .error textarea { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
  @Output() newSession = new EventEmitter()
  @Output() cancelSave = new EventEmitter()

  newSessionForm: FormGroup

  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl

  ngOnInit () {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      this.restrictedWords(['foo', 'mike', 'peter'])
    ])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  restrictedWords (words: string[]): any {
    return (control: FormControl) => {
      const foundWords = words.filter(word => control.value.includes(word))

      return foundWords.length > 0 ? { restrictedWords: foundWords.join(', ') } : null
    }
  }

  createEventSession (formValues: any) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }

    this.newSession.emit(session)
  }

  cancel () {
    this.cancelSave.emit()
  }
}
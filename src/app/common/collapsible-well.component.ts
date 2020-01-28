import { Component, Input } from "@angular/core"

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggle()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content select="[well-content]" *ngIf="!visible"></ng-content>
    </div>
  `,
  styles: [``]
})
export class CollabsibleWellComponent {
  @Input() title: string

  private visible: boolean = false

  toggle () {
    this.visible = !this.visible
  }
}
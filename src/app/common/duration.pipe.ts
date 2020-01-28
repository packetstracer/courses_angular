import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform (duration: number):string {
    switch (duration) {
      case 0:
        return 'Half hour'

      case 1:
       return 'One hour'

      case 2:
        return 'Half day'

      case 3:
       return 'One day'

      default:
       return 'Half hour'
    }
  }
}
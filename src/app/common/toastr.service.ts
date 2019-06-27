import { Injectable } from '@angular/core'

declare let toastr: any

@Injectable()
export class ToastrService {
  success (message: string, title?: string) {
    toastr.success(title, message)
  }

  info (message: string, title?: string) {
    toastr.info(title, message)
  }

  warning (message: string, title?: string) {
    toastr.warning(title, message)
  }

  error (message: string, title?: string) {
    toastr.success(title, message)
  }
}
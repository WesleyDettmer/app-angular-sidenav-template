import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private router: Router
  ) { }

  public handleError(response: Error | HttpErrorResponse) {
    if (response instanceof HttpErrorResponse) {

      switch (response.status) {
        case 204 :
          console.log('erro 204')
        break;
        case 404:
          console.log('erro 404')
          break;
        case 500:
          console.log('erro 500')
          break;
        default:
          console.log('erro default')
          break;
      }
    } 

    return throwError(() => response);
  }
}

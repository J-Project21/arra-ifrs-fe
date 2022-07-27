import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private isProduction = environment.production;
  private allowHandle = environment.useGlobalErrorHandler;
  constructor(private messageService: NzMessageService, private zone: NgZone) {}

  handleError(error: any) {
    if (this.allowHandle) {
      let message = ' error occured, Please try again.';
      // Check if it's an error from an HTTP response
      if (!(error instanceof HttpErrorResponse)) {
        message = 'Application ' + message;
        if (!this.isProduction) {
          error = error; // get the error object
        }
      } else {
        message = 'Internal Server ' + message;
      }

      this.zone.run(() => {
        if (!this.isProduction) {
          message = error?.error?.errors || message;
        }
        this.messageService.error(message);
      });
    } else {
      throw error;
    }
  }
}

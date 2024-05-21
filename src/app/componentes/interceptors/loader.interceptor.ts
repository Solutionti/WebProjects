import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize, pipe } from 'rxjs';
import { LoaderService } from '../services/loader.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  loaderService: any;

  constructor(
    private loader: LoaderService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
   ): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();
    return next.handle(request).pipe(
      finalize(() => this.loaderService.hideLoader())
    );
  }
}

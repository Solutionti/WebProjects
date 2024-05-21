import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // isLoading = new Subject<boolean>();

  private apiCount = 0;
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  constructor() { }

  show() {
    if (this.apiCount === 0) {
      this.isLoadingSubject.next(true);
    }

    this.apiCount++;
  }

  hide() {
    this.apiCount--;
    if (this.apiCount === 0) {
      this.isLoadingSubject.next(false);
    }
  }
}

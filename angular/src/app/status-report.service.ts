import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusReportService {
  private message= new BehaviorSubject<string>("");
  Status = this.message.asObservable()
  changeMessage(message:string)
  {
      this.message.next(message)
  }
  constructor() { }
}

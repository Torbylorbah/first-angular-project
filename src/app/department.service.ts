import { Injectable } from '@angular/core';
import { Department } from './department';
import { DEPARTMENTS } from './mock_departments';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  constructor(private messagesService: MessagesService) { }

  getDepartments(): Observable<Department[]>{
    this.messagesService.add('DepartmentService: fetched department')
      return of (DEPARTMENTS)
    }
}

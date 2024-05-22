import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getAll(): Observable<Todo[]> {
    return of(
      [{
        id: 1,
        description: 'description 1',
        isCompleted: false
      },
      {
        id: 2,
        description: 'description 2',
        isCompleted: false
      }]
    ).pipe(delay(2000))
  }
}

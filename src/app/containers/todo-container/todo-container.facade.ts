import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/store';
import { Observable } from 'rxjs';
import { Todo } from '../../core/models/todo.model';
import * as TodoActions from '../../core/store/actions/todo.actions';
import { selectTodos } from '../../core/store/selectors/todo.selector';

@Injectable({
  providedIn: 'root'
})
export class TodoContainerFacade {

  constructor(private readonly store: Store<AppState>) { }

  //#region Observables
  todos$(): Observable<Todo[]> {
    return this.store.select(selectTodos);
  }

  isLoading$(): Observable<boolean> {
    return this.store.select(selectIsLoading);
  }
  //#endregion

  //#region Public methods
  loadTodos(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  addTodo(index: number) {
    const todo: Todo = { id: index, description: 'New Todo', completed: false };
    this.store.dispatch(TodoActions.addTodo({ todo }));
  }

  completeTodo(todo: Todo) {
    this.store.dispatch(TodoActions.updateTodo({ todo: { ...todo, completed: true } }));
  }
  //#endregion

  //#region Private methods
  //#endregion
}

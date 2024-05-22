import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../../services/todo.service";
import * as TodoActions from '../actions/todo.actions';
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.todoService.getAll().pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos })),
          catchError((error) => {
            return of(TodoActions.loadTodosFailed({error}))
          })
        )
      )
    )
  )
  constructor(private readonly actions$: Actions, private readonly todoService: TodoService) { }
}

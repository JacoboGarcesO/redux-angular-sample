import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todo.model";

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: Todo[] }>());
export const loadTodosFailed = createAction('[Todo] Load Todos Failed', props<{ error: string }>());
import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todo.model";
import * as TodoActions from '../actions/todo.actions';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: ''
}

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, state => ({ ...state, loading: true })),
  on(TodoActions.loadTodosSuccess, (state, action) => ({ ...state, todos: action.todos })),
)

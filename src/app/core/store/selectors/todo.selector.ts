import { createSelector } from "@ngrx/store";
import { AppState } from "../store";
import { TodoState } from "../reducers/todo.reducer";

export const selectTodoState = (state: AppState) => state.todo;

export const selectTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
)
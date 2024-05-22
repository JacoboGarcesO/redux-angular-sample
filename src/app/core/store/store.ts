import { Action, ActionReducer } from "@ngrx/store";
import { TodoState, todoReducer } from "./reducers/todo.reducer";
import { TodoEffects } from "./effects/todo.effects";

export interface AppState {
  todo: TodoState;
}

export interface AppStore {
  todo: ActionReducer<TodoState, Action>;
}

export const appStore: AppStore = {
  todo: todoReducer
}

// Definicion de efectos
export const appEffects = [TodoEffects];
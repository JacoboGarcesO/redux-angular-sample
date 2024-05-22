import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../core/models/todo.model';
import { TodosComponent } from '../../ui/blocks/todos/todos.component';
import { TodoContainerFacade } from './todo-container.facade';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [TodosComponent, AsyncPipe],
  templateUrl: './todo-container.component.html'
})
export class TodoContainerComponent implements OnInit {
  public todos$: Observable<Todo[]>;
  public isLoading$: Observable<boolean>;

  constructor(private readonly facade: TodoContainerFacade) { }

  ngOnInit(): void {
    this.facade.loadTodos();
    this.initializeSubscriptions();
  }

  addTodo(index: number) {
    this.facade.addTodo(index);
  }

  completeTodo(todo: Todo) {
    this.facade.completeTodo(todo);
  }

  private initializeSubscriptions(): void {
    this.todos$ = this.facade.todos$();
    this.isLoading$ = this.facade.isLoading$();
  }
}

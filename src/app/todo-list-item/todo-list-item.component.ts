import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  todos: Todo[] = [];
  todos$ = this.todoService.todosSubject.asObservable();

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todos$.subscribe((todos) => (this.todos = todos));
  }

  deleteTodo(index: number): void {
    this.todoService.deleteTodo(index);
    console.log('Buttton clicked');
  }
  removeAllTodos(): void {
    this.todoService.removeTodo();
  }

  toggleCompleted() {
    // this.todoService.isTodoCompleted(i);
  }

  removeCompleted(): void {
    this.todoService.removeCompletedTodos();
  }
}

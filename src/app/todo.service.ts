import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import './todo-list-item/TodoInterface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  todosSubject = new BehaviorSubject<Todo[]>([]);
  todos: Todo[] = this.todosSubject.value;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(task: string): void {
    if (task.trim() !== '') {
      this.todos.push({ task, completed: false });
      this.todosSubject.next(this.todos);
    }
  }

  deleteTodo(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
      this.todosSubject.next(this.todos);
    }
  }

  removeTodo() {
    this.todos = [];
    this.todosSubject.next(this.todos);
  }

  removeCompletedTodos(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.todosSubject.next(this.todos);
  }

  toggleCompleted(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index].completed = !this.todos[index].completed;
      this.todosSubject.next(this.todos);
    }
  }

  isTodoCompleted(todo: Todo): boolean {
    return todo.completed;
  }
}

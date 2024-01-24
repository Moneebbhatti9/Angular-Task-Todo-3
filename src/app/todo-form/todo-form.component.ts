import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  constructor(private todoService: TodoService) {}
  newTodoTitle: string = '';

  addTodo() {
    this.todoService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }
}

import { TodoService } from './../../services/todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService:TodoService) {}

  ngOnInit(): void {}

  //Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo) {
    //Toggle in UI
    todo.completed = !todo.completed;

    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })
    console.log('Toggle', todo);
  }

  onDelete(todo) {
    console.log('delete', todo);
  }
}

import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoItem';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from './../todo-service.service';
import { element } from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newTodoItem: TodoItem;
  todoItem: TodoItem[];
  todayDate: Date;
  // todoItem: TodoItem [] = [
  //   { name : 'Test', id : 1 },
  //   { name : 'Example', id : 2 }
  // ];

  editInput: Boolean = false;
  selectedIndex: number;
  updateItem: any = {};
  name: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoServiceService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
    });

    this.todayDate = this.todoService.findDate();
    this.todoItem = this.todoService.getTodos();
  }

  EditTodo(index) {
    this.editInput = true;
    this.selectedIndex = index;
    this.updateItem.name = this.todoItem[this.selectedIndex].name;
  }

  UpdateTodo() {
    this.todoItem[this.selectedIndex].name = this.updateItem.name;
    this.editInput = false;
    this.updateItem.name = '';
  }

  DeleteTodo(index) {
    this.todoItem.splice(index, 1);
  }

  AddTodo() {
    this.newTodoItem = {
      name: this.updateItem.name,
      id: this.todoItem.length + 1
    };
    this.todoItem.push(this.newTodoItem);
  }
}

import { Injectable } from '@angular/core';
import { TodoItem } from './todoItem';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // ?
})
export class TodoServiceService {
  date: Date;
  todoItem: TodoItem[];
  constructor(private http: HttpClient) {}

  findDate() {
    this.date = new Date();
    return this.date;
  }

  getTodos() {
    this.todoItem = [{ name: 'Test', id: 1 }, { name: 'Example', id: 2 }];
    return this.todoItem;
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}

import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './../todo-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.todoService.getUsers().subscribe(data => {
      this.users = data;
    },
    err => {
      console.log('error: ', err);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoServiceService } from './../todo-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  todayDate: Date;
  // userJSON: any = {};
  constructor(
    private router: Router,
    private todoService: TodoServiceService
  ) {}

  ngOnInit() {
    this.todayDate = this.todoService.findDate();
  }

  onSubmit() {
    if (this.user.name === 'admin' && this.user.password === '1234') {
      this.router.navigate(['/users']);
    } else if (this.user.name === 'aaaa' && this.user.password === '1234') {
      this.router.navigate(['/todo']);
    } else {
      alert('Login Failed!');
    }
  }
}

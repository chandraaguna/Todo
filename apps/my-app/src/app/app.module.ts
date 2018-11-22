import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NxModule } from '@nrwl/nx';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule   } from '@angular/material';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'users', component: UsersComponent }
];

// const appRoutes: Routes = [
//   {
//     path: 'login',
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: '',
//         children: [
//           { path: 'login', component: LoginComponent },
//           { path: 'todo', component: TodoComponent },
//           { path: 'users', component: UsersComponent }
//         ]
//       }
//     ]
//   }
// ];

@NgModule({
  declarations: [AppComponent, TodoComponent, LoginComponent, UsersComponent],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NxModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

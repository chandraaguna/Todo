import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { UsersComponent } from './../users/users.component';
import { TodoComponent } from './../todo/todo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let mockRouter;
  

  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'users', component: UsersComponent },
        { path: 'todo', component: TodoComponent }
      ]), FormsModule, HttpClientModule],
      declarations: [ LoginComponent, UsersComponent, TodoComponent ],
      providers: [
        { provide: Router, useValue: mockRouter},
    ]
    }).compileComponents();
  }));

  it('should create', () => {
  const fixture = TestBed.createComponent(LoginComponent);
  const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should navigate to user page', () => {
  const fixture = TestBed.createComponent(LoginComponent);
  const component = fixture.componentInstance;
    component.user.name = 'admin';
    component.user.password = '1234';
    component.onSubmit();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/users']);
  });

  it('should navigate to todo page', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    component.user.name = 'aaaa';
    component.user.password = '1234';
    component.onSubmit();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/todo']);
  });
});

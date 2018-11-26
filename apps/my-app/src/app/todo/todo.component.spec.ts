import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
      declarations: [TodoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // EditTodo
  it('should update the boolean value', () => {
    component.EditTodo(1);
    fixture.detectChanges();
    expect(component.editInput).toBeTruthy();
  });

  it('should update the index value', () => {
    component.EditTodo(1);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(1);
  });

  it('should get the item name for edit', () => {
    component.EditTodo(0);
    fixture.detectChanges();
    expect(component.updateItem.name).toBe('Test');
  });

  // UpdateTodo
  it('should update the item name', () => {
    component.updateItem.name = 'Checked';
    component.selectedIndex = 0;
    component.UpdateTodo();
    fixture.detectChanges();
    expect(component.todoItem[0].name).toBe('Checked');
  });
});

import { TestBed } from '@angular/core/testing';
import { TodoServiceService } from './todo-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('TodoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
    }).compileComponents());

  it('should be created', () => {
    const service: TodoServiceService = TestBed.get(TodoServiceService);
    expect(service).toBeTruthy();
  });
});

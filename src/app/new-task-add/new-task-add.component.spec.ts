import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskAddComponent } from './new-task-add.component';

describe('NewTaskAddComponent', () => {
  let component: NewTaskAddComponent;
  let fixture: ComponentFixture<NewTaskAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedListQueueComponent } from './linked-list-queue.component';

describe('LinkedListQueueComponent', () => {
  let component: LinkedListQueueComponent;
  let fixture: ComponentFixture<LinkedListQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedListQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedListQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

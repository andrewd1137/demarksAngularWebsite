import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeProjComponent } from './tic-tac-toe-proj.component';

describe('TicTacToeProjComponent', () => {
  let component: TicTacToeProjComponent;
  let fixture: ComponentFixture<TicTacToeProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToeProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

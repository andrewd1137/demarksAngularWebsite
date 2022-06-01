import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCalcProjectComponent } from './simple-calc-project.component';

describe('SimpleCalcProjectComponent', () => {
  let component: SimpleCalcProjectComponent;
  let fixture: ComponentFixture<SimpleCalcProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCalcProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCalcProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcdCalculatorComponent } from './gcd-calculator.component';

describe('GcdCalculatorComponent', () => {
  let component: GcdCalculatorComponent;
  let fixture: ComponentFixture<GcdCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcdCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcdCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

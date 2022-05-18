import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My2centsComponent } from './my2cents.component';

describe('My2centsComponent', () => {
  let component: My2centsComponent;
  let fixture: ComponentFixture<My2centsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My2centsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(My2centsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

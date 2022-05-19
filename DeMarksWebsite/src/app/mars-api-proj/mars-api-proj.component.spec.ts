import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsApiProjComponent } from './mars-api-proj.component';

describe('MarsApiProjComponent', () => {
  let component: MarsApiProjComponent;
  let fixture: ComponentFixture<MarsApiProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsApiProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsApiProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

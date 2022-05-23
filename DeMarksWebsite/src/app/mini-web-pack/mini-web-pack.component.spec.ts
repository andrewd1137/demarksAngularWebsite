import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWebPackComponent } from './mini-web-pack.component';

describe('MiniWebPackComponent', () => {
  let component: MiniWebPackComponent;
  let fixture: ComponentFixture<MiniWebPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniWebPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniWebPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

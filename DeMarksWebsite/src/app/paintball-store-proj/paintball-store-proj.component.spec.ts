import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintballStoreProjComponent } from './paintball-store-proj.component';

describe('PaintballStoreProjComponent', () => {
  let component: PaintballStoreProjComponent;
  let fixture: ComponentFixture<PaintballStoreProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintballStoreProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintballStoreProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

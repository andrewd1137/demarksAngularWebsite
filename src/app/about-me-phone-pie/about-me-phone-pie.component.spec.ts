import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePhonePieComponent } from './about-me-phone-pie.component';

describe('AboutMePhonePieComponent', () => {
  let component: AboutMePhonePieComponent;
  let fixture: ComponentFixture<AboutMePhonePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMePhonePieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMePhonePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoLightSwitchComponent } from './arduino-light-switch.component';

describe('ArduinoLightSwitchComponent', () => {
  let component: ArduinoLightSwitchComponent;
  let fixture: ComponentFixture<ArduinoLightSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArduinoLightSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoLightSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

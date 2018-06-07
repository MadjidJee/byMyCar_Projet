import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCarComponent } from './slider-car.component';

describe('SliderCarComponent', () => {
  let component: SliderCarComponent;
  let fixture: ComponentFixture<SliderCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

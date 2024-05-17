import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnceSimulationComponent } from './once-simulation.component';

describe('OnceSimulationComponent', () => {
  let component: OnceSimulationComponent;
  let fixture: ComponentFixture<OnceSimulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnceSimulationComponent]
    });
    fixture = TestBed.createComponent(OnceSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

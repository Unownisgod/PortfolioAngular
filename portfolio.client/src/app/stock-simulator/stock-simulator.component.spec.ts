import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSimulatorComponent } from './stock-simulator.component';

describe('StockSimulatorComponent', () => {
  let component: StockSimulatorComponent;
  let fixture: ComponentFixture<StockSimulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockSimulatorComponent]
    });
    fixture = TestBed.createComponent(StockSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

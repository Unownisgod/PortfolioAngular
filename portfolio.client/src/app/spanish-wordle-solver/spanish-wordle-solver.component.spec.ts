import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishWordleSolverComponent } from './spanish-wordle-solver.component';

describe('SpanishWordleSolverComponent', () => {
  let component: SpanishWordleSolverComponent;
  let fixture: ComponentFixture<SpanishWordleSolverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpanishWordleSolverComponent]
    });
    fixture = TestBed.createComponent(SpanishWordleSolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

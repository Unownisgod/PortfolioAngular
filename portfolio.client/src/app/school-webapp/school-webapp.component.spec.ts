import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShcoolWebappComponent } from './school-webapp.component';

describe('ShcoolWebappComponent', () => {
  let component: ShcoolWebappComponent;
  let fixture: ComponentFixture<ShcoolWebappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShcoolWebappComponent]
    });
    fixture = TestBed.createComponent(ShcoolWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

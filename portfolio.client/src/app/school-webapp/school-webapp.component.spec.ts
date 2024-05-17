import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolWebappComponent } from './school-webapp.component';

describe('ShcoolWebappComponent', () => {
  let component: SchoolWebappComponent;
  let fixture: ComponentFixture<SchoolWebappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolWebappComponent]
    });
    fixture = TestBed.createComponent(SchoolWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

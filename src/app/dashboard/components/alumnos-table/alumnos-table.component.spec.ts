import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosTableComponent } from './alumnos-table.component';

describe('AlumnosTableComponent', () => {
  let component: AlumnosTableComponent;
  let fixture: ComponentFixture<AlumnosTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosTableComponent]
    });
    fixture = TestBed.createComponent(AlumnosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchearchFormComponent } from './schearch-form.component';

describe('SchearchFormComponent', () => {
  let component: SchearchFormComponent;
  let fixture: ComponentFixture<SchearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

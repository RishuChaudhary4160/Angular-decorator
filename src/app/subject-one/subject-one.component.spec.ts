import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectOneComponent } from './subject-one.component';

describe('SubjectOneComponent', () => {
  let component: SubjectOneComponent;
  let fixture: ComponentFixture<SubjectOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

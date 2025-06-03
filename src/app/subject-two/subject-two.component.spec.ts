import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTwoComponent } from './subject-two.component';

describe('SubjectTwoComponent', () => {
  let component: SubjectTwoComponent;
  let fixture: ComponentFixture<SubjectTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

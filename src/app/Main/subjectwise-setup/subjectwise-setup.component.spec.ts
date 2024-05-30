import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectwiseSetupComponent } from './subjectwise-setup.component';

describe('SubjectwiseSetupComponent', () => {
  let component: SubjectwiseSetupComponent;
  let fixture: ComponentFixture<SubjectwiseSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectwiseSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectwiseSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

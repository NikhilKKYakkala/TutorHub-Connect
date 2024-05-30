import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTuitionComponent } from './individual-tuition.component';

describe('IndividualTuitionComponent', () => {
  let component: IndividualTuitionComponent;
  let fixture: ComponentFixture<IndividualTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

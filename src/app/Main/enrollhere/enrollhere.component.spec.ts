import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollhereComponent } from './enrollhere.component';

describe('EnrollhereComponent', () => {
  let component: EnrollhereComponent;
  let fixture: ComponentFixture<EnrollhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

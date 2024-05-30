import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutePageComponent } from './institute-page.component';

describe('InstitutePageComponent', () => {
  let component: InstitutePageComponent;
  let fixture: ComponentFixture<InstitutePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

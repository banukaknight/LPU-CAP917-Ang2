import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form3ValidateComponent } from './form3-validate.component';

describe('Form3ValidateComponent', () => {
  let component: Form3ValidateComponent;
  let fixture: ComponentFixture<Form3ValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form3ValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form3ValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

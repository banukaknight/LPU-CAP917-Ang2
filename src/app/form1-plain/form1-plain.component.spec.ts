import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1PlainComponent } from './form1-plain.component';

describe('Form1PlainComponent', () => {
  let component: Form1PlainComponent;
  let fixture: ComponentFixture<Form1PlainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form1PlainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1PlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

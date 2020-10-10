import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2BootstrapComponent } from './form2-bootstrap.component';

describe('Form2BootstrapComponent', () => {
  let component: Form2BootstrapComponent;
  let fixture: ComponentFixture<Form2BootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form2BootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2BootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

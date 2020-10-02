import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDedicacionComponent } from './form-dedicacion.component';

describe('FormDedicacionComponent', () => {
  let component: FormDedicacionComponent;
  let fixture: ComponentFixture<FormDedicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDedicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDedicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

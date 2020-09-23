import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginUsuarioComponent } from './form-login-usuario.component';

describe('FormLoginUsuarioComponent', () => {
  let component: FormLoginUsuarioComponent;
  let fixture: ComponentFixture<FormLoginUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

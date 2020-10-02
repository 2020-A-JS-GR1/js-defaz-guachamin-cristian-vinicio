import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaLoginUsuarioBSComponent } from './ruta-login-usuario-bs.component';

describe('RutaLoginUsuarioBSComponent', () => {
  let component: RutaLoginUsuarioBSComponent;
  let fixture: ComponentFixture<RutaLoginUsuarioBSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaLoginUsuarioBSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaLoginUsuarioBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

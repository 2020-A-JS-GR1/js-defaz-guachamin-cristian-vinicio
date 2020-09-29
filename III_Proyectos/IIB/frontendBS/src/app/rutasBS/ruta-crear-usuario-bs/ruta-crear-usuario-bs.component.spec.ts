import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearUsuarioBSComponent } from './ruta-crear-usuario-bs.component';

describe('RutaCrearUsuarioBSComponent', () => {
  let component: RutaCrearUsuarioBSComponent;
  let fixture: ComponentFixture<RutaCrearUsuarioBSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearUsuarioBSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearUsuarioBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

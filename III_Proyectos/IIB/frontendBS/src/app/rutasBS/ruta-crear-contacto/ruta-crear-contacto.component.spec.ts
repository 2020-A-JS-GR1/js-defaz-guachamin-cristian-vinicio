import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearContactoComponent } from './ruta-crear-contacto.component';

describe('RutaCrearContactoComponent', () => {
  let component: RutaCrearContactoComponent;
  let fixture: ComponentFixture<RutaCrearContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

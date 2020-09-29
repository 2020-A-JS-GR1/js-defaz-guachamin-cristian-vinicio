import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaClientes } from './ruta-clientes.component';

describe('RutaAnunciosComponent', () => {
  let component: RutaClientes;
  let fixture: ComponentFixture<RutaClientes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaClientes ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaClientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

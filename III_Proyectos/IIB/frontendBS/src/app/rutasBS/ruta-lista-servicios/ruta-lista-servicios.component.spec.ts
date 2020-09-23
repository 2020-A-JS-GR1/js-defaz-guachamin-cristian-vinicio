import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaServiciosComponent } from './ruta-lista-servicios.component';

describe('RutaListaServiciosComponent', () => {
  let component: RutaListaServiciosComponent;
  let fixture: ComponentFixture<RutaListaServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

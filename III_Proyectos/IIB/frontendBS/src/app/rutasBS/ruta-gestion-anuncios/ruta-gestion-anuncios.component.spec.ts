import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionAnuncios } from './ruta-gestion-anuncios.component';

describe('RutaListaAnunciosAnComponent', () => {
  let component: RutaGestionAnuncios;
  let fixture: ComponentFixture<RutaGestionAnuncios>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionAnuncios ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionAnuncios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

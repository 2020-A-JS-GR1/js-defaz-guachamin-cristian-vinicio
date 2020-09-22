import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaAnunciosComponent } from './ruta-lista-anuncios.component';

describe('RutaListaAnunciosComponent', () => {
  let component: RutaListaAnunciosComponent;
  let fixture: ComponentFixture<RutaListaAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

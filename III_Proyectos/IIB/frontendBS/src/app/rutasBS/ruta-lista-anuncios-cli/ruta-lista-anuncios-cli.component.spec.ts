import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaAnunciosCliComponent } from './ruta-lista-anuncios-cli.component';

describe('RutaListaAnunciosComponent', () => {
  let component: RutaListaAnunciosCliComponent;
  let fixture: ComponentFixture<RutaListaAnunciosCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaAnunciosCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaAnunciosCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

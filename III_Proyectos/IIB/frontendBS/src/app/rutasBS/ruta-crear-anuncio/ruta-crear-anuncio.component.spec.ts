import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearAnuncioComponent } from './ruta-crear-anuncio.component';

describe('RutaCrearAnuncioComponent', () => {
  let component: RutaCrearAnuncioComponent;
  let fixture: ComponentFixture<RutaCrearAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

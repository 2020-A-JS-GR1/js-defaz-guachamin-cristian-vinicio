import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarAnuncioComponent } from './ruta-editar-anuncio.component';

describe('RutaEditarAnuncioComponent', () => {
  let component: RutaEditarAnuncioComponent;
  let fixture: ComponentFixture<RutaEditarAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

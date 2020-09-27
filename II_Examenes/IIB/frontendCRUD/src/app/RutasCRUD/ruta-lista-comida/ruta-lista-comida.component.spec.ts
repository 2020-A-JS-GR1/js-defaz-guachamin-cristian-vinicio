import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaComidaComponent } from './ruta-lista-comida.component';

describe('RutaListaComidaComponent', () => {
  let component: RutaListaComidaComponent;
  let fixture: ComponentFixture<RutaListaComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

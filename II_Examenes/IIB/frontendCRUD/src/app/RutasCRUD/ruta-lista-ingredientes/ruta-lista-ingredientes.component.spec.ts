import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaIngredientesComponent } from './ruta-lista-ingredientes.component';

describe('RutaListaIngredientesComponent', () => {
  let component: RutaListaIngredientesComponent;
  let fixture: ComponentFixture<RutaListaIngredientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaIngredientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

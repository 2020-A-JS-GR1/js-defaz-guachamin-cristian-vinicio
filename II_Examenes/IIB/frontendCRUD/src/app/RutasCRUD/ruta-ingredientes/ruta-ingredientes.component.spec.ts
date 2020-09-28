import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaIngredientesComponent } from './ruta-ingredientes.component';

describe('RutaIngredientesComponent', () => {
  let component: RutaIngredientesComponent;
  let fixture: ComponentFixture<RutaIngredientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaIngredientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

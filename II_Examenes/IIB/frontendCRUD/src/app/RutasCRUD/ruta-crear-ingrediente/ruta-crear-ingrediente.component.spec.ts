import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearIngredienteComponent } from './ruta-crear-ingrediente.component';

describe('RutaCrearIngredienteComponent', () => {
  let component: RutaCrearIngredienteComponent;
  let fixture: ComponentFixture<RutaCrearIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

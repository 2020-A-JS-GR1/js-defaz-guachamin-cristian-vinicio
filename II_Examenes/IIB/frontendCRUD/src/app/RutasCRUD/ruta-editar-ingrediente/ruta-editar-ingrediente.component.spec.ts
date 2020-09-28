import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarIngredienteComponent } from './ruta-editar-ingrediente.component';

describe('RutaEditarIngredienteComponent', () => {
  let component: RutaEditarIngredienteComponent;
  let fixture: ComponentFixture<RutaEditarIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

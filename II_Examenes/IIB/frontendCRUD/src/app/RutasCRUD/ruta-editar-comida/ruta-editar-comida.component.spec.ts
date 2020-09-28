import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarComidaComponent } from './ruta-editar-comida.component';

describe('RutaEditarComidaComponent', () => {
  let component: RutaEditarComidaComponent;
  let fixture: ComponentFixture<RutaEditarComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

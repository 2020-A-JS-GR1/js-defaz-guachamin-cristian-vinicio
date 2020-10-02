import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarContactoComponent } from './ruta-editar-contacto.component';

describe('RutaEditarContactoComponent', () => {
  let component: RutaEditarContactoComponent;
  let fixture: ComponentFixture<RutaEditarContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

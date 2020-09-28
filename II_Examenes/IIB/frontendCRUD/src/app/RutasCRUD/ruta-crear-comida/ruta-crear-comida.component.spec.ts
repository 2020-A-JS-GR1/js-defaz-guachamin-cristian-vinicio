import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearComidaComponent } from './ruta-crear-comida.component';

describe('RutaCrearComidaComponent', () => {
  let component: RutaCrearComidaComponent;
  let fixture: ComponentFixture<RutaCrearComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaOpcionesPrincipalesComponent } from './ruta-opciones-principales.component';

describe('RutaOpcionesPrincipalesComponent', () => {
  let component: RutaOpcionesPrincipalesComponent;
  let fixture: ComponentFixture<RutaOpcionesPrincipalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaOpcionesPrincipalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaOpcionesPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

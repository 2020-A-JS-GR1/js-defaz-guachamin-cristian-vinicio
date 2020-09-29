import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerfilAnuncianteComponent } from './modal-perfil-anunciante.component';

describe('ModalPerfilAnuncianteComponent', () => {
  let component: ModalPerfilAnuncianteComponent;
  let fixture: ComponentFixture<ModalPerfilAnuncianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPerfilAnuncianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPerfilAnuncianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

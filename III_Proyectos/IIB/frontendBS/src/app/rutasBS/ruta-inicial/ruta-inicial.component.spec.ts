import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInicialComponent } from './ruta-inicial.component';

describe('RutaInicialComponent', () => {
  let component: RutaInicialComponent;
  let fixture: ComponentFixture<RutaInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

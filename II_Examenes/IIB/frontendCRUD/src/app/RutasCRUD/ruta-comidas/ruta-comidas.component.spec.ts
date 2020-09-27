import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaComidasComponent } from './ruta-comidas.component';

describe('RutaComidasComponent', () => {
  let component: RutaComidasComponent;
  let fixture: ComponentFixture<RutaComidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaComidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

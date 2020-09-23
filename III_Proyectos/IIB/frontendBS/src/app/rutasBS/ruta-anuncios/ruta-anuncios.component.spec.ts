import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAnunciosComponent } from './ruta-anuncios.component';

describe('RutaAnunciosComponent', () => {
  let component: RutaAnunciosComponent;
  let fixture: ComponentFixture<RutaAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

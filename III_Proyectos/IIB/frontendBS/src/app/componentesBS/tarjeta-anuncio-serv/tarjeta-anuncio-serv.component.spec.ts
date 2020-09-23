import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAnuncioServComponent } from './tarjeta-anuncio-serv.component';

describe('TarjetaAnuncioServComponent', () => {
  let component: TarjetaAnuncioServComponent;
  let fixture: ComponentFixture<TarjetaAnuncioServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaAnuncioServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAnuncioServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

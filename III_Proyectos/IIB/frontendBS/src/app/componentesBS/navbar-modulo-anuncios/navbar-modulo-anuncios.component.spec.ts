import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarModuloAnunciosComponent } from './navbar-modulo-anuncios.component';

describe('NavbarModuloAnunciosComponent', () => {
  let component: NavbarModuloAnunciosComponent;
  let fixture: ComponentFixture<NavbarModuloAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarModuloAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarModuloAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

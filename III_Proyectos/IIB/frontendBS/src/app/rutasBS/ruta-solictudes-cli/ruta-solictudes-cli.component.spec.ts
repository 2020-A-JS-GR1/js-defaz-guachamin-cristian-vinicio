import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSolictudesCliComponent } from './ruta-solictudes-cli.component';

describe('RutaSolictudesClienteComponent', () => {
  let component: RutaSolictudesCliComponent;
  let fixture: ComponentFixture<RutaSolictudesCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSolictudesCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSolictudesCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

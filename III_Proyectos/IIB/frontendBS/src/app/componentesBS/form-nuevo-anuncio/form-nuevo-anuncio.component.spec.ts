import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoAnuncioComponent } from './form-nuevo-anuncio.component';

describe('FormNuevoAnuncioComponent', () => {
  let component: FormNuevoAnuncioComponent;
  let fixture: ComponentFixture<FormNuevoAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNuevoAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReseniaComponent } from './modal-resenia.component';

describe('ModalReseniaComponent', () => {
  let component: ModalReseniaComponent;
  let fixture: ComponentFixture<ModalReseniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReseniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

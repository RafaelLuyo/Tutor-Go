import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSeleccionadoComponent } from './tutor-seleccionado.component';

describe('TutorSeleccionadoComponent', () => {
  let component: TutorSeleccionadoComponent;
  let fixture: ComponentFixture<TutorSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorSeleccionadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

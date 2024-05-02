import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProfileTutorComponent } from './show-profile-tutor.component';

describe('ShowProfileTutorComponent', () => {
  let component: ShowProfileTutorComponent;
  let fixture: ComponentFixture<ShowProfileTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowProfileTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowProfileTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

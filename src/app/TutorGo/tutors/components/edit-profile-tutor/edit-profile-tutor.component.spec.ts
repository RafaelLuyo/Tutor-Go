import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileTutorComponent } from './edit-profile-tutor.component';

describe('EditProfileTutorComponent', () => {
  let component: EditProfileTutorComponent;
  let fixture: ComponentFixture<EditProfileTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProfileTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProfileTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentProfile } from '../../model/student-profile';
import { StudentProfileService } from '../../services/student-profile.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  userProfile: StudentProfile | undefined;
  isEditing = false;
  urlImage: string | undefined;

  constructor(
    private studentProfileService: StudentProfileService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const studentProfileId = this.route.snapshot.params['studentProfileId'];
    this.getStudentProfileId(studentProfileId);
  }

  toggleEdit(): void {
    this.isEditing = true;
  }

  saveProfile(): void {
    this.isEditing = false;

    if (this.isEditing) {
      this.userProfile!.userProfilePhoto = "string";
    }

    this.studentProfileService.update(this.userProfile?.id, this.userProfile).subscribe(
      (response: any) => {
        console.log('Perfil actualizado:', response);
        // Manejar la respuesta segÃºn tus necesidades
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }

  cancelEdit(): void {
    this.isEditing = false;
    const studentProfileId = this.route.snapshot.params['studentProfileId'];
    this.getStudentProfileId(studentProfileId); // Recargar el perfil original
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.urlImage = e.target.result; // Almacenar temporalmente la URL de la imagen seleccionada
    };

    reader.readAsDataURL(file);
  }

  private getStudentProfileId(studentProfileId: number): void {
    this.studentProfileService.getStudentProfileId(studentProfileId).subscribe(
      (response: any) => {
        this.userProfile = response;
      },
      (error) => {
        console.error('Error al obtener el perfil:', error);
      }
    );
  }
}

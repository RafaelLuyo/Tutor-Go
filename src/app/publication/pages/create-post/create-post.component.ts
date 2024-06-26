import { Component } from '@angular/core';
import { ThemePalette } from "@angular/material/core";
import { PublicationService } from "../../services/publication.service";
import { Publication } from "../../model/publication";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  idUrl: string | undefined;
  color: ThemePalette = "warn";
  checked = true;
  disabled = false;
  dataSource: MatTableDataSource<any>;
  publication: Publication;

  constructor(
    private route: ActivatedRoute,
    private publicationService: PublicationService,
    private router: Router
  ) {
    this.publication = {} as Publication;
    this.dataSource = new MatTableDataSource<any>();

    this.route.queryParams.subscribe(params => {
      this.idUrl = params['id'];
    });
    this.publication.mentorProfileId = Number(this.idUrl);
    this.publication.image = []; // Inicializar el array de imágenes vacío
  }

  createPublication(): void {
    this.publication.id = 0;
    this.publication.image = [""]; // Asignar un array con un string vacío como imagen

    this.publicationService.create(this.publication).subscribe(
      (response: any) => {
        this.dataSource.data.push({ ...response });
        console.log(this.dataSource.data);
        alert("Post creado exitosamente");
        this.router.navigate(['/home'], { queryParams: { id: this.idUrl } });
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }

  cancelEdit() {
    this.router.navigate(['/home'], { queryParams: { id: this.idUrl } });
  }
}

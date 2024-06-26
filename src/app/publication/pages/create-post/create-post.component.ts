import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {PublicationService} from "../../services/publication.service";
import {Publication} from "../../model/publication";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  idUrl: string | undefined;
  isVisibilityOn: any;
  color: ThemePalette = "warn";
  checked = true;
  disabled = false;
  dataSource: MatTableDataSource<any>;
  publication: Publication;
  //imagen
  images: any = [];
  private Integer: any;

  constructor(private route: ActivatedRoute, private tutorgoService: PublicationService, private router: Router) {
    this.publication = {} as Publication;
    this.dataSource = new MatTableDataSource<any>();

    this.publication.image = [];
    this.route.queryParams.subscribe(params => {
      this.idUrl = params['id'];
    });
    this.publication.mentorProfileId = Number(this.idUrl);
  }

  createPublication(): void {
    this.publication.id = 0;
    this.tutorgoService.create(this.publication).subscribe(
      (response: any) => {
        this.dataSource.data.push({...response});
        console.log(this.dataSource)
        this.dataSource.data = this.dataSource.data.map((p: Publication) => {
          console.log(p);
          alert("post created")
          this.router.navigate(["/home"],{ queryParams: { id: this.idUrl }});
          return p;

        });
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }


  cancelEdit() {
    this.router.navigate(["/home"],{ queryParams: { id: this.idUrl } });
  }
}

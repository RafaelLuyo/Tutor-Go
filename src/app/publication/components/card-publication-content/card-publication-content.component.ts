import {Component, Input, OnInit} from '@angular/core';
import {Publication} from "../../model/publication";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-card-publication-content',
  templateUrl: './card-publication-content.component.html',
  styleUrls: ['./card-publication-content.component.css']
})
export class CardPublicationContentComponent implements OnInit{
  @Input() publications: Array<Publication>=[];
  id: number=0;
  constructor(private router:Router,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {

  }

  seeIdPublication(id:number) {
    console.log(id)
    this.router.navigate([`/publication/`+id],{ queryParams: { id: this.id }});
  }
}

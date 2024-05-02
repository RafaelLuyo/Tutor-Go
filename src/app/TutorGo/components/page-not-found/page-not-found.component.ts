import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit{
  invalidUrl: string = '';

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url[0].path;
  }

  constructor(private route: ActivatedRoute, private router: Router) {}


  navigateToHome() {
    this.router.navigate(['student-home']).then();
  }
}

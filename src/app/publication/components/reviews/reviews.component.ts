// reviews.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  newReview: string = '';
  reviews: string[] = [];
  newMessageText: any;

  constructor(private http: HttpClient) {}


  submitReview() {
    if (this.newReview.trim() !== '') {
      this.reviews.push(this.newReview);
      this.saveReview(this.newReview);
      this.newReview = '';
    }
  }

  saveReview(review: string) {
    this.http.post('http://localhost:3000/reviews', { text: review })
      .subscribe(response => {
        console.log('Reseña guardada en JSON Server:', response);
      });
  }

}


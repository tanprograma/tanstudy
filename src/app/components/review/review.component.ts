import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/quote';
import { QuoteService } from 'src/app/services/quote.service';
import { Review } from 'src/interfaces';
import { ReviewService } from 'src/app/services/review.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  isLoading = false;
  reviews: Review[] = [];
  constructor(private reviewService: ReviewService) {}
  ngOnInit(): void {
    this.getReview();
  }
  loading() {
    this.isLoading = !this.isLoading;
  }
  getReview() {
    const reviews = this.reviewService.reviews;
    if (!reviews.length) {
      this.loading();
      this.reviewService.getReviews().subscribe((reviews) => {
        this.reviewService.reviews = reviews;
        this.reviews = reviews;
        this.isLoading = false;
      });
    }
    this.reviewService.getReviews().subscribe((reviews) => {
      this.reviewService.reviews = reviews;
      this.reviews = reviews;
    });
  }
}

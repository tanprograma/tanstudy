import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/interfaces';
import {
  faEdit,
  faSave,
  faFolderOpen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css'],
})
export class CreateReviewComponent {
  loading = false;
  editIcon = faEdit;
  deleteIcon = faTimes;
  saveIcon = faSave;
  openIcon = faFolderOpen;
  point: string = '';
  review: Review = {
    topic: '',
    points: [],
  };

  constructor(private reviewService: ReviewService) {}
  ngOnInit(): void {}

  add() {
    if (!this.point.length) return;
    this.review.points.splice(0, 0, this.point);
    this.clear();
  }
  clear() {
    this.point = '';
    // this.topic = '';
    // this.subtopic = '';
  }
  deleteAll() {
    this.review = { topic: '', points: [] };
  }
  deleteOne(item: string): void {
    this.review.points = this.review.points.filter((i) => {
      return i != item;
    });
  }
  // saveOne(i: Review) {
  //   if (i._id != undefined) return;
  //   const payload: Review = i;
  //   this.loading = true;
  //   this.ReviewService.createReview(payload).subscribe((Review) => {
  //     this.reviews.map((i) => {
  //       if (i.content == Review.content) {
  //         i._id = Review._id;
  //       }
  //       return i;
  //     });

  //     this.loading = false;
  //   });
  // }
  saveAll() {
    if (!this.review.points.length) return;

    this.loading = true;
    this.reviewService.createReview(this.review).subscribe((review) => {
      this.review._id = review._id;

      this.loading = false;
    });
  }
  // createPayload() {
  //   return {
  //     topic: this.topic,
  //     points:this.points
  //   }
  // }
}

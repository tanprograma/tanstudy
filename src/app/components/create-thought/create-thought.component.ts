import { Component, OnInit } from '@angular/core';
import { ThoughtService } from 'src/app/services/thought.service';
import { Thought } from 'src/interfaces';
import {
  faEdit,
  faSave,
  faFolderOpen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  loading = false;
  editIcon = faEdit;
  deleteIcon = faTimes;
  saveIcon = faSave;
  openIcon = faFolderOpen;
  point: string = '';
  review: Thought = {
    topic: '',
    points: [],
  };

  constructor(private thoughtService: ThoughtService) {}
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
  //   this.thoughtService.createReview(payload).subscribe((Review) => {
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
    this.thoughtService.createThought(this.review).subscribe((review) => {
      this.review._id = review._id;

      this.loading = false;
    });
  }
}

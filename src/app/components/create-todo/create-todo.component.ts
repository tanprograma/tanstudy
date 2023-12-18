import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Plan } from 'src/interfaces';
import {
  faEdit,
  faSave,
  faFolderOpen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  loading = false;
  editIcon = faEdit;
  deleteIcon = faTimes;
  saveIcon = faSave;
  openIcon = faFolderOpen;
  point: string = '';
  review: Plan = {
    topic: '',
    points: [],
  };

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {}

  add() {
    if (!this.point.length) return;
    this.review.points.splice(0, 0, { item: this.point });
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
  deleteOne(item: { item: string }): void {
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
    this.todoService.createPlan(this.review).subscribe((review) => {
      this.review._id = review._id;

      this.loading = false;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/quote';
import { QuoteService } from 'src/app/services/quote.service';
import { Plan } from 'src/interfaces';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  isLoading = false;
  plans: Plan[] = [];
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.getPlan();
  }
  loading() {
    this.isLoading = !this.isLoading;
  }
  getPlan() {
    const plans = this.todoService.plans;
    if (plans.length == 0) {
      this.loading();
      this.todoService.getPlans().subscribe((plans) => {
        this.todoService.plans = plans;
        this.plans = plans;
        this.isLoading = false;
      });
    }
    this.todoService.getPlans().subscribe((plans) => {
      this.todoService.plans = plans;
      this.plans = plans;
    });
  }
}

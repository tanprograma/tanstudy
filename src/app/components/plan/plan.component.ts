import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/quote';
import { QuoteService } from 'src/app/services/quote.service';
import { Plan } from 'src/interfaces';
import { PlanService } from 'src/app/services/plan.service';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent {
  isLoading = false;
  plans: Plan[] = [];
  constructor(private planService: PlanService) {}
  ngOnInit(): void {
    this.getPlan();
  }
  loading() {
    this.isLoading = !this.isLoading;
  }
  getPlan() {
    const plans = this.planService.plans;
    if (plans.length == 0) {
      this.loading();
      this.planService.getPlans().subscribe((plans) => {
        this.planService.plans = plans;
        this.plans = plans;
        this.isLoading = false;
      });
    }
    this.planService.getPlans().subscribe((plans) => {
      this.planService.plans = plans;
      this.plans = plans;
    });
  }
}

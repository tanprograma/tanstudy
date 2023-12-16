import { Injectable } from '@angular/core';
import { Plan } from 'src/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PlanService {
  url = environment.plan_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  plans: Plan[] = [];
  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.url);
  }
  createPlans(plans: Plan[]): Observable<Plan[]> {
    return this.http.post<Plan[]>(
      `${this.url}/create`,
      plans,
      this.httpOptions
    );
  }
  createPlan(plan: Plan): Observable<Plan> {
    return this.http.post<Plan>(`${this.url}/create`, plan, this.httpOptions);
  }
}

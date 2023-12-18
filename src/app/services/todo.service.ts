import { Injectable } from '@angular/core';
import { Todo } from 'src/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = environment.todo_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  plans: Todo[] = [];
  getPlans(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
  createPlans(plans: Todo[]): Observable<Todo[]> {
    return this.http.post<Todo[]>(
      `${this.url}/create`,
      plans,
      this.httpOptions
    );
  }
  createPlan(plan: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.url}/create`, plan, this.httpOptions);
  }
}

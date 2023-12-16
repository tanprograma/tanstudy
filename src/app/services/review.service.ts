import { Injectable } from '@angular/core';
import { Review } from 'src/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  url = environment.review_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  reviews: Review[] = [];
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.url);
  }
  createReviews(reviews: Review[]): Observable<Review[]> {
    return this.http.post<Review[]>(
      `${this.url}/create`,
      reviews,
      this.httpOptions
    );
  }
  createReview(Review: Review): Observable<Review> {
    return this.http.post<Review>(
      `${this.url}/create`,
      Review,
      this.httpOptions
    );
  }
}

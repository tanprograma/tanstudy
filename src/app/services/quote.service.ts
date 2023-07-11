import { Injectable } from '@angular/core';
import { Quote } from 'src/quote';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  url = environment.quote_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  quotes: Quote[] = [];
  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.url);
  }
  createQuotes(quotes: Quote[]): Observable<Quote[]> {
    return this.http.post<Quote[]>(
      `${this.url}/create`,
      quotes,
      this.httpOptions
    );
  }
  createQuote(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(`${this.url}/create`, quote, this.httpOptions);
  }
}

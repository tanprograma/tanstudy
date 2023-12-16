import { Injectable } from '@angular/core';
import { Thought } from 'src/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  url = environment.thought_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  thoughts: Thought[] = [];
  getThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.url);
  }
  createThoughts(thoughts: Thought[]): Observable<Thought[]> {
    return this.http.post<Thought[]>(
      `${this.url}/create`,
      thoughts,
      this.httpOptions
    );
  }
  createThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(
      `${this.url}/create`,
      thought,
      this.httpOptions
    );
  }
}

import { Injectable } from '@angular/core';
import { Subtopic } from 'src/subtopic';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SubtopicService {
  url = environment.subtopic_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  subtopics: Subtopic[] = [];
  getSubtopics(): Observable<Subtopic[]> {
    return this.http.get<Subtopic[]>(this.url);
  }
  createSubtopics(
    topic: string,
    subtopics: Subtopic[]
  ): Observable<Subtopic[]> {
    return this.http.post<Subtopic[]>(
      `${this.url}/create/${topic}`,
      subtopics,
      this.httpOptions
    );
  }
  createSubtopic(topic: string, subtopic: Subtopic): Observable<Subtopic> {
    return this.http.post<Subtopic>(
      `${this.url}/create/${topic}`,
      subtopic,
      this.httpOptions
    );
  }
}

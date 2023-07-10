import { Injectable } from '@angular/core';
import { Topic } from 'src/topic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TopicService {
  url = environment.topic_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  topics: Topic[] = [];
  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.url);
  }
  createTopics(topics: Topic[]): Observable<Topic[]> {
    return this.http.post<Topic[]>(
      `${this.url}/create`,
      topics,
      this.httpOptions
    );
  }
  createTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(`${this.url}/create`, topic, this.httpOptions);
  }
}

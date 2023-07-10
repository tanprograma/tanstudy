import { Injectable } from '@angular/core';
import { Question } from 'src/question';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  url = environment.question_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  questions: Question[] = [];
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url);
  }
  createQuestions(questions: Question[]): Observable<Question[]> {
    return this.http.post<Question[]>(
      `${this.url}/create`,
      questions,
      this.httpOptions
    );
  }
  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(
      `${this.url}/create`,
      question,
      this.httpOptions
    );
  }
}

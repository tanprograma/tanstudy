import { Injectable } from '@angular/core';
import { Question } from 'src/question';
import { Diary } from 'src/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createItem, createItems, getItems } from 'src/utilities';
@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  url = environment.diary_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  diaries: Diary[] = [];
  getDiaries(): Observable<{ created: string; content: string }[]> {
    return getItems(this.url, this.http);
  }
  createDiaries(diaries: Diary[]): Observable<Diary[]> {
    return createItems(diaries, this.url, this.http);
  }
  createDiary(diary: Diary): Observable<Diary> {
    return createItem(diary, this.url, this.http);
  }
}

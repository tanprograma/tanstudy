import { Injectable } from '@angular/core';
import { Format } from 'src/format';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FormatService {
  url = environment.format_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  formats: Format[] = [];
  getFormats(): Observable<Format[]> {
    return this.http.get<Format[]>(this.url);
  }
  createFormats(formats: Format[]): Observable<Format[]> {
    return this.http.post<Format[]>(
      `${this.url}/create`,
      formats,
      this.httpOptions
    );
  }
  createFormat(format: Format): Observable<Format> {
    return this.http.post<Format>(
      `${this.url}/create`,
      format,
      this.httpOptions
    );
  }
}

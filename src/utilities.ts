// export function createItems<T>(items: T) { }
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export function createItem<T>(
  item: T,
  url: string,
  http: HttpClient
): Observable<T> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  return http.post<T>(`${url}/create`, item, httpOptions);
}
export function createItems<T>(
  items: T[],
  url: string,
  http: HttpClient
): Observable<T[]> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  return http.post<T[]>(`${url}/create`, items, httpOptions);
}
export function getItems<T>(url: string, http: HttpClient): Observable<T[]> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  return http.get<T[]>(url);
}

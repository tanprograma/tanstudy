import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getItems, createItems, createItem } from 'src/utilities';
import { Field } from 'src/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FieldService {
  url = environment.field_url;

  constructor(private http: HttpClient) {}
  fields: Field[] = [];
  getFields(): Observable<Field[]> {
    return this.http.get<Field[]>(this.url);
  }
  createFields(fields: Field[]): Observable<Field[]> {
    return createItems(fields, this.url, this.http);
  }
  createField(field: Field): Observable<Field> {
    return createItem(field, this.url, this.http);
  }
}

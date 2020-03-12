import { Injectable } from '@angular/core';
import { Finder } from './models/finder';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private endpoint = "https://localhost:44398/api/values";

  constructor(private http: HttpClient) { }

  find(model: Finder): Observable<any> {
    return this.http.get(this.endpoint);
  }
}

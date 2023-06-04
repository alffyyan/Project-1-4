import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiurl ='http://localhost:3000/form';


  constructor(private http: HttpClient) { }
  getGuide(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }
}

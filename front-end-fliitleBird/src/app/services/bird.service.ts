import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Birds } from "../Birds"
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BirdService {
  private baseAPiUrl = environment.baseApiUrl

  private apiUrl = `${this.baseAPiUrl}/birds`

  constructor(private http: HttpClient) { }

  createBird(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formData);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enrollee } from '../enrollee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  url = 'http://localhost:8080/saveuser';
  getUrl = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {}
  register(userData: any) {
    return this.http.post<any>(this.url, userData);
  }

  getEnrollees(): Observable<Enrollee[]> {
    return this.http.get<Enrollee[]>(this.getUrl);
  }
}

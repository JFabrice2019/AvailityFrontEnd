import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  _url = 'http://localhost:8080/saveuser';
  constructor(private _http: HttpClient) {}
  register(userData: any) {
    return this._http.post<any>(this._url, userData);
  }
}

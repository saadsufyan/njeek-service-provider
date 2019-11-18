import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {

  token;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getAllConsultants() {
    return this.http
    .get(`${environment.baseUrl}/service/getConsultants`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': this.token
        }
    });
  }
  addConsultants(body) {
    return this.http
    .post(`${environment.baseUrl}/service/add_consultant`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': this.token
        }
    });
  }
  updateConsultants(body) {
    return this.http
    .post(`${environment.baseUrl}/service/update_consultant`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': this.token
        }
    });
  }
}

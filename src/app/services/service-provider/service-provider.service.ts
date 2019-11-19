import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  token;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/admin/service_providers`);
  }
  getServicesWithID(id) {
    return this.http.get(`${environment.baseUrl}/service/service_by_id?id=${id}`);
  }
  addService(body) {
    return this.http
    .post(`${environment.baseUrl}/service/add_service`, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
  updateService(body) {
    console.log(body);
    return this.http
    .post(`${environment.baseUrl}/service/update_service`, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
  acceptService(body) {
    return this.http.post(`${environment.baseUrl}/admin/approve_service`, body);
  }
  rejectService(body) {
    return this.http.post(`${environment.baseUrl}/admin/reject_service`, body);
  }
  getMyService() {
    return this.http
    .get(`${environment.baseUrl}/service/myServices`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
}

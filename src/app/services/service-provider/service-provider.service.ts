import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.baseUrl}/admin/service_providers`);
  }
  getServicesWithID(id) {
    return this.http.get(`${environment.baseUrl}/admin/services?id=${id}`);
  }
  acceptService(body) {
    return this.http.post(`${environment.baseUrl}/admin/approve_service`, body);
  }
  rejectService(body) {
    return this.http.post(`${environment.baseUrl}/admin/reject_service`, body);
  }
}

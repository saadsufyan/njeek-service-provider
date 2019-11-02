import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  create(body) {
    return this.http.post(`${environment.baseUrl}/admin/category`, body);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/admin/category`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MainCategoryService {

  constructor(private http: HttpClient) {}

  create(body) {
    return this.http.post(`${environment.baseUrl}/admin/main_category`, body);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/admin/main_category`);
  }

}

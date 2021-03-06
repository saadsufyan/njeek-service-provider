import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  token: any;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getAllAppointments() {
    return this.http
    .get(`${environment.baseUrl}/appointments/fetch_appointments`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }

  getPatientsList() {
    return this.http
    .get(`${environment.baseUrl}/appointments/fetch_patients_all`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
  getServedPatientsList() {
    return this.http
    .get(`${environment.baseUrl}/appointments/fetch_patients_served`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }

  getPatientAppointmentRequestList() {
    return this.http
    .get(`${environment.baseUrl}/appointments/fetch_patients_request`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
  acceptAppointment(body) {
    return this.http
    .post(`${environment.baseUrl}/service/approve_appointment`, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
  rejectAppointment(body) {
    return this.http
    .post(`${environment.baseUrl}/service/reject_appointment`, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
  getAllPaidPatients() {
    return this.http
    .get(`${environment.baseUrl}/appointments/fetch_paid_patients_request`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
}

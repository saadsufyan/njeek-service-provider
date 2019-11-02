import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppointmentsService } from 'app/services/appointments/appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  providers: [AppointmentsService]
})
export class AppointmentsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  appointmentsList;
  dtTrigger = new Subject();
  constructor(private http: HttpClient, private router: Router, public appointmentApi: AppointmentsService) { }

  ngOnInit() {
    this.getAppoinments();
  }

  getAppoinments() {
    this.appointmentApi.getAllAppointments().subscribe(res => {
      console.log(res);
      this.appointmentsList = res;
    }, err => {
      console.log(err);
    })
  }
}

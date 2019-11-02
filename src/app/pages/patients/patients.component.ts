import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppointmentsService } from 'app/services/appointments/appointments.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [AppointmentsService]
})
export class PatientsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  patientList;
  dtTrigger = new Subject();
  constructor(private http: HttpClient, private router: Router, public appointmentApi: AppointmentsService) { }

  ngOnInit() {
    this.getPatientsList();
  }

  getPatientsList() {
    this.appointmentApi.getPatientsList().subscribe(res => {
      console.log(res);
      this.patientList = res;
    }, err => {
      console.log(err);
    })
  }
}

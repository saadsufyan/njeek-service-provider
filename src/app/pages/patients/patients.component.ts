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
export class PatientsComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  patientList;
  dtTrigger = new Subject();
  constructor(private http: HttpClient, private router: Router, public appointmentApi: AppointmentsService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getPatientsList();
  }

  getPatientsList() {
    this.appointmentApi.getPatientsList().subscribe((res: any) => {
      console.log(res);
      this.patientList = res.message;
      this.dtTrigger.next();
    }, err => {
      console.log(err);
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}

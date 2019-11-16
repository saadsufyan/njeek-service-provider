import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppointmentsService } from 'app/services/appointments/appointments.service';

@Component({
  selector: 'app-patients-served',
  templateUrl: './patients-served.component.html',
  styleUrls: ['./patients-served.component.scss'],
  providers: [AppointmentsService]
})
export class PatientsServedComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  patientServedList;
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
    this.appointmentApi.getServedPatientsList().subscribe((res: any) => {
      console.log(res);
      this.patientServedList = res.message;
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

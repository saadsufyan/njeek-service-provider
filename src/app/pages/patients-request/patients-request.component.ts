import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppointmentsService } from 'app/services/appointments/appointments.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-patients-request',
  templateUrl: './patients-request.component.html',
  styleUrls: ['./patients-request.component.scss'],
  providers: [AppointmentsService]
})
export class PatientsRequestComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  patientRequestList;
  dtTrigger = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router,
    public appointmentApi: AppointmentsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };
    this.getPatientsList();
  }

  getPatientsList() {
    this.spinner.show();
    this.appointmentApi.getPatientAppointmentRequestList().subscribe((res: any) => {
      console.log(res);
      this.spinner.hide();
      this.patientRequestList = res.message;
      this.dtTrigger.next();
    }, err => {
      this.spinner.hide();
      console.log(err);
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}

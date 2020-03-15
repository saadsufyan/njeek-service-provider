import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppointmentsService } from 'app/services/appointments/appointments.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-patients-paid-request',
  templateUrl: './patients-paid-request.component.html',
  styleUrls: ['./patients-paid-request.component.scss'],
  providers: [AppointmentsService]
})
export class PatientsPaidRequestComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  patientPaidList;
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
    this.getPaidPatientsList();
  }

  getPaidPatientsList() {
    this.spinner.show();
    this.appointmentApi.getAllPaidPatients().subscribe((res: any) => {
      console.log(res);
      this.spinner.hide();
      this.patientPaidList = res.message;
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

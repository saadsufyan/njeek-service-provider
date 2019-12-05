import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppointmentsService } from 'app/services/appointments/appointments.service';
import { ConsultantsService } from 'app/services/consultants/consultants.service';
import { GeneralApiService } from 'app/services/general-api.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  providers: [AppointmentsService, ConsultantsService, GeneralApiService]
})
export class AppointmentsComponent implements OnInit , OnDestroy {

  dtOptions: DataTables.Settings = {};
  appointmentsList;
  dtTrigger = new Subject();
  consultantList;
  consultantObj;
  constructor(
    public router: Router,
    public appointmentApi: AppointmentsService,
    public consultantApi: ConsultantsService,
    public sharedService: GeneralApiService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getAppoinments();
    this.getConsultant();
  }

  getAppoinments() {
    this.appointmentApi.getAllAppointments().subscribe((res: any) => {
      console.log(res);
      this.appointmentsList = res.message;
      this.dtTrigger.next();
    }, err => {
      console.log(err);
    })
  }
  getConsultant() {
    this.consultantApi.getAllConsultants().subscribe(res => {
      console.log(res);
      this.consultantList = res;
    }, err => {
      console.log(err);
    })
  }
  gotoAppointmentDetails(id) {
    const index = this.appointmentsList.findIndex(x => x.appointment_id === id);
    this.sharedService.sendData(this.appointmentsList[index]);
    this.router.navigate(['/appointment-details']);
  }

  acceptAppointment(id) {
    console.log(this.consultantObj);
    const data = {
      appointment_id: id,
      consultant_name: this.consultantObj.name,
      consultant_id: this.consultantObj.id
    }
    console.log(data);
    this.appointmentApi.acceptAppointment(data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  rejectAppointment(id) {
    const data = {
      appointment_id: id
    }
    this.appointmentApi.acceptAppointment(data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}

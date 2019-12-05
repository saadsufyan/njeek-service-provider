import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from 'app/services/general-api.service';
import { ConsultantsService } from 'app/services/consultants/consultants.service';
import { AppointmentsService } from 'app/services/appointments/appointments.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
  providers: [GeneralApiService, ConsultantsService, AppointmentsService]
})
export class AppointmentDetailsComponent implements OnInit {
  appointmentData;
  consultantList;
  consultantObj;

  constructor(
    public sharedService: GeneralApiService,
    public consultantApi: ConsultantsService,
    public appointmentApi: AppointmentsService) { }

  ngOnInit() {
    this.appointmentData = this.sharedService.fetchData();
    console.log(this.appointmentData);
    this.getConsultant();
  }
  getConsultant() {
    this.consultantApi.getAllConsultants().subscribe(res => {
      console.log(res);
      this.consultantList = res;
    }, err => {
      console.log(err);
    })
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
}

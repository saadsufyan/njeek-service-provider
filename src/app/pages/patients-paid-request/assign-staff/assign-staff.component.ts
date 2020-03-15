import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentsService } from 'app/services/appointments/appointments.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConsultantsService } from 'app/services/consultants/consultants.service';
import { GeneralApiService } from 'app/services/general-api.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApproveModalComponent } from './approve-modal/approve-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assign-staff',
  templateUrl: './assign-staff.component.html',
  styleUrls: ['./assign-staff.component.scss'],
  providers: [GeneralApiService, ConsultantsService]
})
export class AssignStaffComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  patientServedList;
  dtTrigger = new Subject();

  AppointmentId;
  appointmentDate;
  staffList;

  @Input() name;

  constructor(
    private http: HttpClient,
    private router: Router,
    public consultantApi: ConsultantsService,
    public sharedService: GeneralApiService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    public activatedRoute : ActivatedRoute,
    public appointmentApi: AppointmentsService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.AppointmentId = params.id;
      this.appointmentDate = params.appointment_date;
      console.log('Appointment id: ', this.AppointmentId);
      console.log('Appointment date: ', this.appointmentDate);
      });
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 25
      };
      this.getConsultants();
  }

  open(minutes: string) {
    const modalRef = this.modalService.open(ApproveModalComponent);
    modalRef.componentInstance.minutes = '30';
  }
  getConsultants() {
    this.spinner.show();
    this.consultantApi.getAllConsultantsByDate(this.appointmentDate).subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.staffList = res;
      this.dtTrigger.next();
    }, err => {
      console.log(err);
    })
  }
  assignStaff(staffId, staffName) {
    this.spinner.show();
    const data = {
      appointment_id: this.AppointmentId,
      consultant_name: staffName,
      consultant_id: staffId,
      minutes: '60'
    }
    this.consultantApi.assignStaff(data).subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.toastr.success(`The Appointment has been assigned to ${staffName}`, 'Appointment Assigned');
    }, err => {
      console.log(err);
      this.spinner.hide();
      if (err.status === 200) {
        this.toastr.success(`The Appointment has been assigned to ${staffName}`, 'Appointment Assigned');
      } else {
        this.toastr.error('Something went wrong', 'Failure', {
          timeOut: 3000
        });
      }
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}

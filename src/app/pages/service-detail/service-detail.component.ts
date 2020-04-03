import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceProviderService } from 'app/services/service-provider/service-provider.service';
import { ActivatedRoute } from '@angular/router';
import { GeneralApiService } from 'app/services/general-api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  providers: [ServiceProviderService, GeneralApiService]
})
export class ServiceDetailComponent implements OnInit {

  public date: Date = new Date(Date.now());

  serviceName;
  serviceNameArabic;
  serviceShortDescription;
  serviceShortDescriptionArabic;
  serviceDescription;
  serviceDescriptionArabic;
  charges;
  conveyanceCharges;
  offer;
  timeTo;
  timeFrom;

  id;
  serviceData;
  subCategoryName;
  categoryName;
  constructor(
    public serviceApi: ServiceProviderService,
    private activatedroute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    public sharedService: GeneralApiService) { }

  ngOnInit() {
    this.spinner.show();
    if (this.activatedroute.snapshot.params['id']) {
      this.activatedroute.params.subscribe(params => {
        this.id = params['id'];
      });
    }
    this.serviceData = this.sharedService.fetchData();
    console.log(this.serviceData)
    this.categoryName = this.serviceData.category_name;
    this.subCategoryName = this.serviceData.category_name;
    this.serviceName = this.serviceData.name;
    this.serviceNameArabic = this.serviceData.arabic_name;
    this.spinner.hide();
  }

  onSubmit() {
    this.spinner.show();
    const data = {
      // tslint:disable-next-line:radix
      service_id: parseInt(this.id),
      service_name: this.serviceName,
      service_name_arabic: this.serviceNameArabic,
      short_description: this.serviceShortDescription,
      short_description_arabic: this.serviceShortDescriptionArabic,
      service_description: this.serviceDescription,
      service_description_arabic: this.serviceDescriptionArabic,
      charges: this.charges,
      conveyance_charges: this.conveyanceCharges,
      offer: this.offer,
      time_to: this.timeTo,
      time_from: this.timeFrom,
    }

    console.log(data);
    this.serviceApi.addService(data).subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.toastr.success('Service has been sent to admin for approval', 'Service Request');

    }, err => {
      this.spinner.hide();
      console.log(err);
      if (err.status === 200) {
        this.toastr.success('Service has been sent to admin for approval', 'Service Request');
      } else {
        this.toastr.error('Something went wrong', 'Failure', {
          timeOut: 3000
        });
      }
    })
  }
}

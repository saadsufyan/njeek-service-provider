import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceProviderService } from 'app/services/service-provider/service-provider.service';
import { ActivatedRoute } from '@angular/router';
import { GeneralApiService } from 'app/services/general-api.service';

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
  serviceDescription;
  serviceDescriptionArabic;
  charges;
  conveyanceCharges;
  timeTo;
  timeFrom;

  id;
  serviceData;
  subCategoryName;
  categoryName;
  constructor(
    public serviceApi: ServiceProviderService,
    private activatedroute: ActivatedRoute,
    public sharedService: GeneralApiService) { }

  ngOnInit() {
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
  }

  onSubmit() {

    const data = {
      // tslint:disable-next-line:radix
      service_id: parseInt(this.id),
      service_name: this.serviceName,
      service_name_arabic: this.serviceNameArabic,
      service_description: this.serviceDescription,
      service_description_arabic: this.serviceDescriptionArabic,
      charges: this.charges,
      time_to: this.timeTo,
      time_from: this.timeFrom,
    }

    console.log(data);
    this.serviceApi.addService(data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}

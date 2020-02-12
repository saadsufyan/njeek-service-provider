import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceProviderService } from 'app/services/service-provider/service-provider.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss'],
  providers: [ServiceProviderService]
})
export class ServiceProvidersComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  items: any;
  dtTrigger = new Subject();
  constructor(
    private http: HttpClient,
    private router: Router,
    public serviceProvider: ServiceProviderService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    }
    this.getServiceProviders();
  }

  getServiceProviders() {
    this.spinner.show();
    this.serviceProvider.getAll().subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.items = res;
      // Calling the DT trigger to manually render the table
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

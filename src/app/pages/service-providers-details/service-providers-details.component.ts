import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceProviderService } from 'app/services/service-provider/service-provider.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-service-providers-details',
  templateUrl: './service-providers-details.component.html',
  styleUrls: ['./service-providers-details.component.scss'],
  providers: [ServiceProviderService]
})
export class ServiceProvidersDetailsComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  items: any;
  dtTrigger = new Subject();
  serviceId;
  constructor(
    private http: HttpClient,
    private router: Router,
    public serviceProvider: ServiceProviderService,
    private activatedroute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.activatedroute.snapshot.params['id']) {
      this.activatedroute.params.subscribe(params => {
        this.serviceId = params['id'];
      });
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }
    this.getServiceProvidersWithID(this.serviceId);
  }

  getServiceProvidersWithID(id) {
    this.serviceProvider.getServicesWithID(id).subscribe(res => {
      console.log(res);
      this.items = res;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }, err => {
      console.log(err);
    })
  }


  acceptService(commison) {
    const data = {
      service_id: this.serviceId,
      commison: commison
    }
    console.log(data);
    this.serviceProvider.acceptService(data).subscribe(res => {
      console.log(res);
      this.toastr.success(
        `You have successfully accept service.`,
        'Service Accepted'
      );
    }, err => {
      console.log(err);
      this.toastr.error(`Some error occured`, `Can't accept service.`);
    })
  }
  rejectService() {
    const data = {
      service_id: this.serviceId
    }
    this.serviceProvider.rejectService(data).subscribe(res => {
      console.log(res);
      this.toastr.success(
        `You have successfully reject service.`,
        'Service Rejected'
      );
    }, err => {
      console.log(err);
      this.toastr.error(`Some error occured`, `Can't reject service.`);
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}

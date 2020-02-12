import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from 'app/services/customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {
  customerId;
  dtOptions: DataTables.Settings = {};
  items: any;
  dtTrigger = new Subject();

  constructor(
    public customerApi: CustomerService,
    private activatedroute: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    if (this.activatedroute.snapshot.params['id']) {
      this.activatedroute.params.subscribe(params => {
        this.customerId = params['id'];
      });
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }
    console.log(this.customerId);
    this.getCustomerData(this.customerId);
  }

  getCustomerData(id) {
    this.spinner.show();
    this.customerApi.getCustomerWithId(id).subscribe(res => {
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

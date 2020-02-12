import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  persons = [];
  dtTrigger = new Subject();

  constructor(private http: HttpClient, private router: Router, private spinner: NgxSpinnerService) { }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 25
      }
      this.spinner.show();
      this.http.get('https://najeek.herokuapp.com/admin/category')
        .subscribe((persons: any) => {
          console.log('person ', persons);
          this.spinner.hide();
          this.persons = persons;
          // Calling the DT trigger to manually render the table
          this.dtTrigger.next();
        });
    }

    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }

    private extractData(res) {
      const body = res.json();
      return body.data || {};
    }

    navigateAddCategory() {
      this.router.navigateByUrl('/add-categories');
    }
}

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons = [];
  dtTrigger = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2
      };
      this.http.get('https://najeek.herokuapp.com/admin/subcategory')
        .subscribe((persons: any) => {
          console.log('person ', persons);
          this.persons = persons;
          // Calling the DT trigger to manually render the table
          this.dtTrigger.next();
        });
    }

    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }

    navigateAddSubCategory() {
      this.router.navigate(['/add-sub-category']);
    }
}

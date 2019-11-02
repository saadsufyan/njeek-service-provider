import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainCategoryService } from 'app/services/main-category/main-category.service';

@Component({
  selector: 'app-add-main-category',
  templateUrl: './add-main-category.component.html',
  styleUrls: ['./add-main-category.component.scss']
})
export class AddMainCategoryComponent implements OnInit {
  category = new FormGroup({
    name: new FormControl(''),
    arabic_name: new FormControl(''),
    short_description: new FormControl(''),
    arabic_short_description: new FormControl(''),
    long_description: new FormControl(''),
    arabic_long_description: new FormControl(''),
    image: new FormControl(null)
  });

  constructor(private categoryService: MainCategoryService) { }

  ngOnInit() {
  }

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.category.get('image').setValue(file);
        // need to run CD since file load runs outside of zone
        // this.cd.markForCheck();
    }
  }

  onSubmit() {
    console.log('submit data ', this.category.value);
    const formData = new FormData();
    formData.append('image', this.category.get('image').value)
    formData.append('name', this.category.get('name').value)
    formData.append('arabic_name', this.category.get('arabic_name').value)
    formData.append('short_description', this.category.get('short_description').value)
    formData.append('arabic_short_description', this.category.get('arabic_short_description').value)
    formData.append('long_description', this.category.get('long_description').value)
    formData.append('arabic_long_description', this.category.get('arabic_long_description').value)
    this.categoryService.create(formData).subscribe(res => console.log('main category add', res))
  }

}

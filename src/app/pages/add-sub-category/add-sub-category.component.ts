import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainCategoryService } from 'app/services/main-category/main-category.service';
import { CategoriesService } from 'app/services/categories/categories.service';
import { SubCategoryService } from 'app/services/sub-category/sub-category.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {
  category = new FormGroup({
    name: new FormControl(''),
    arabic_name: new FormControl(''),
    short_description: new FormControl(''),
    arabic_short_description: new FormControl(''),
    long_description: new FormControl(''),
    arabic_long_description: new FormControl(''),
    image: new FormControl(null),
    main_category_id: new FormControl(''),
    main_category_name: new FormControl(''),
    category_name: new FormControl(''),
    category_id: new FormControl('')
  });

  mainCategoryList = [];
  categoryList = [];

  constructor(
    private mainCategoryService: MainCategoryService,
    private categoryService: CategoriesService,
    private subCategoryService: SubCategoryService) { }

  ngOnInit() {
    this.mainCategoryService.getAll().subscribe((res: any) => {
      this.mainCategoryList = res;
      console.log('list ', res);
    });

    this.categoryService.getAll().subscribe((res: any) => {
      this.categoryList = res;
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.category.get('image').setValue(file);
    }
  }

  onSubmit() {
    let category_name;
    const categoryId = this.category.get('main_category_id').value;

    for (let i = 0; i < this.mainCategoryList.length; i++) {
      if (this.mainCategoryList[i].id === parseInt(categoryId)) {
        category_name = this.mainCategoryList[i].name;
      }
    }

    let categories_name;
    const categoriesId = this.category.get('category_id').value;

    for (let i = 0; i < this.categoryList.length; i++) {
      if (this.categoryList[i].id === parseInt(categoriesId)) {
        categories_name = this.categoryList[i].name;
      }
    }

    const formData = new FormData();
    formData.append('image', this.category.get('image').value)
    formData.append('name', this.category.get('name').value)
    formData.append('arabic_name', this.category.get('arabic_name').value)
    formData.append('short_description', this.category.get('short_description').value)
    formData.append('arabic_short_description', this.category.get('arabic_short_description').value)
    formData.append('long_description', this.category.get('long_description').value)
    formData.append('arabic_long_description', this.category.get('arabic_long_description').value);
    formData.append('main_category_id', this.category.get('main_category_id').value);
    formData.append('main_category_name', category_name);
    formData.append('category_id', this.category.get('category_id').value);
    formData.append('category_name', categories_name);
    this.subCategoryService.create(formData).subscribe(res => console.log('sub category add', res))
  }


}

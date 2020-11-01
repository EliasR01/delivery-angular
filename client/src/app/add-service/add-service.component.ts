import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { CREATE_SERVICE } from '../mutations/createService';
import { GET_PRODUCTS_BY_IDS } from '../queries/getProductsById';
import { DELETE_PRODUCT } from '../mutations/deleteProduct';
import { CREATE_PRODUCT } from '../mutations/createProduct';
import { TypeService } from '../types';
import { DialogComponent } from '../dialog/dialog.component';
import {
  ServiceDataResponse,
  ProductDataResponse,
  TypeServiceResponse,
} from '../interfaces';
import { GET_TYPE_SERVICE } from '../queries/getTypeServices';
import { MatDialog } from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import { Product } from '../types';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss'],
})
export class AddServiceComponent implements OnInit {
  typeServices: TypeService[];
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(
    private service: DashboardService,
    private apollo: Apollo,
    private dialog: MatDialog,
    private location: Location,
    private detector: ChangeDetectorRef,
    private router: Router
  ) {}
  isEditingService: Boolean = false;
  isProductDeleted: Boolean = false;
  isProductAdded: Boolean = false;
  products: Product[] = [];
  deletedProducts: Product[] = [];
  addedProducts: Product[] = [];
  loading: Boolean = false;

  serviceForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    stock: new FormControl(0, [Validators.required]),
    price: new FormControl(0.0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  isButtonEnabled: Boolean = false;
  isProductEnabled: Boolean = this.serviceForm.valid;
  description: string = 'Description';

  toggleDescription(): void {
    if (this.serviceForm.value.type === 'Food') {
      this.description = 'Ingredients';
    } else {
      this.description = 'Description';
    }
  }

  addProduct(): void {
    if (
      this.products.find(
        (element) => element.name === this.productForm.value.name
      ) === undefined
    ) {
      if (
        this.productForm.value.stock > 0 &&
        this.productForm.value.price > 0 &&
        this.productForm.value.name != '' &&
        this.productForm.value.description != ''
      ) {
        if (!this.isProductDeleted) {
          if (this.isEditingService) {
            this.isProductAdded = true;
            const createProductData = {
              ...this.productForm.value,
              service: this.service.editableService._id,
            };
            this.addedProducts.push(createProductData);
          }
          this.products.push(this.productForm.value);
          this.resetForm('ProductForm');
          this.isButtonEnabled = true;
        } else {
          this.dialog.open(DialogComponent, {
            data:
              'Can only perform 1 operation when editing service, either Add or Delete a product!',
          });
        }
      } else {
        this.dialog.open(DialogComponent, {
          data: 'Must complete the form before adding a product!',
        });
      }
    } else {
      this.dialog.open(DialogComponent, {
        data: 'That name of product has been already added!',
      });
    }
  }

  removeProduct(value: Product): void {
    if (!this.isProductAdded) {
      const index = this.products.indexOf(value);
      if (this.isEditingService) {
        this.isButtonEnabled = true;
        this.isProductDeleted = true;
        this.deletedProducts.push(this.products[index]);
      }

      this.products.splice(index, 1);
      if (this.products.length == 0) {
        this.isButtonEnabled = false;
      }
    } else {
      this.dialog.open(DialogComponent, {
        data:
          'Can only perform 1 operation when editing service, either Add or Delete a product!',
      });
    }
  }

  submit(): void {
    if (this.isEditingService) {
      if (this.isProductAdded) {
        this.createProduct();
      } else if (this.isProductDeleted) {
        this.deleteProduct();
      }
    } else {
      this.createService();
    }
  }

  createService(): void {
    const serviceData = {
      ...this.serviceForm.value,
      user: this.service.userData._id,
    };

    const createServiceData = {
      ...serviceData,
      products: this.products,
    };
    this.apollo
      .mutate<ServiceDataResponse>({
        mutation: CREATE_SERVICE,
        variables: {
          serviceData: createServiceData,
        },
      })
      .subscribe(() => {
        this.dialog.open(DialogComponent, {
          data: 'Service successfully created!',
        });
        this.resetForm('ProductForm');
        this.resetForm('ServiceForm');
        this.products = [];
      });
  }

  createProduct(): void {
    //Adds new product when the service is edited
    console.log(this.addedProducts);
    this.loading = true;
    this.apollo
      .mutate({
        mutation: CREATE_PRODUCT,
        variables: { productData: { products: this.addedProducts } },
      })
      .toPromise()
      .then(() => {
        this.loading = false;
        this.router.navigate(['dashboard/summary']);
        this.dialog.open(DialogComponent, {
          data: 'Product added successfully',
        });
      })
      .catch(() => {
        this.loading = false;
        this.dialog.open(DialogComponent, {
          data: 'Something went wrong, please contact the support team',
        });
      });
  }

  deleteProduct(): void {
    //Remove the product when the service is edited
    this.loading = true;
    const products = this.deletedProducts.map((value) => value._id);
    this.apollo
      .mutate({
        mutation: DELETE_PRODUCT,
        variables: {
          data: {
            _id: products,
          },
          service: { service: this.service.editableService._id },
        },
      })
      .toPromise()
      .then(() => {
        this.loading = false;
        this.router.navigate(['dashboard/summary']);
        this.dialog.open(DialogComponent, {
          data: 'Product deleted successfully',
        });
      })
      .catch(() => {
        this.loading = false;
        this.dialog.open(DialogComponent, {
          data: 'Something went wrong, please contact the support team',
        });
      });
  }

  resetForm(form: string): void {
    if (form === 'ProductForm') {
      this.productForm.controls['name'].setValue('');
      this.productForm.controls['stock'].setValue(0);
      this.productForm.controls['price'].setValue(0.0);
      this.productForm.controls['description'].setValue('');
    } else if (form === 'ServiceForm') {
      this.serviceForm.reset();
    }
  }

  back(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.loading = true;
    this.apollo
      .query<TypeServiceResponse>({ query: GET_TYPE_SERVICE })
      .toPromise()
      .then((res) => {
        this.typeServices = res.data.getTypeOfService;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.dialog.open(DialogComponent, { data: '' });
      });

    if (this.service.editableService) {
      this.loading = true;
      this.isEditingService = true;
      this.serviceForm.controls['type'].setValue(
        this.service.editableService.type
      );
      if (this.serviceForm.value.type === 'Food') {
        this.description = 'Ingredients';
      }
      this.serviceForm.controls['name'].setValue(
        this.service.editableService.name
      );
      this.serviceForm.controls['description'].setValue(
        this.service.editableService.description
      );
      this.apollo
        .query<ProductDataResponse>({
          query: GET_PRODUCTS_BY_IDS,
          variables: {
            products: { _id: this.service.editableService.products },
          },
        })
        .subscribe((response) => {
          this.products = response.data.getProductsById;
          this.loading = false;
          this.detector.markForCheck();
        });
    }
  }

  ngOnDestroy(): void {
    this.service.editableService = null;
    this.isEditingService = false;
    this.isProductAdded = false;
    this.isProductEnabled = false;
    this.isProductDeleted = false;
    this.products = [];
    this.deletedProducts = [];
    this.addedProducts = [];
    this.loading = false;
    this.resetForm('ProductForm');
    this.resetForm('ServiceForm');
  }
}

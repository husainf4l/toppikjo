import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class EditProductComponent implements OnInit {
  editProductForm: FormGroup;
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.editProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imgUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.loadProduct();
    }
  }

  loadProduct(): void {
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((product) => {
        this.editProductForm.patchValue(product);
      });
    }
  }

  onSubmit(): void {
    if (this.editProductForm.valid && this.productId) {
      this.productService.updateProduct(this.productId, this.editProductForm.value).subscribe(() => {
        this.router.navigate(['/admin/products']);
      });
    }
  }
}

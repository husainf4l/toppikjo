import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { FileUploadService } from '../../../services/upload-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ProductFormComponent implements OnInit {
  name: string = '';
  price: number = 0;
  description: string = '';
  imgUrl: string = '';
  color: string[] = [];  // Array to handle multiple colors
  featured: boolean = false;

  selectedFile: File | null = null;

  constructor(
    private productService: ProductService,
    private fileUploadService: FileUploadService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submitForm(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadImage(this.selectedFile).subscribe(uploadResponse => {
        this.imgUrl = uploadResponse.url;  // Use the uploaded image URL
        this.saveProduct();
      });
    } else {
      this.saveProduct();
    }
  }

  private saveProduct(): void {
    const newProduct = {
      name: this.name,
      price: this.price,
      description: this.description,
      imgUrl: this.imgUrl,
      color: this.color,
      featured: this.featured
    };

    this.productService.createProduct(newProduct).subscribe(() => {
      this.router.navigate(['/admin/products']);  // Redirect to product list after creation
    });
  }
}

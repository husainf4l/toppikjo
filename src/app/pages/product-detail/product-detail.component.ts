import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;
  constructor(private activatedRoute: ActivatedRoute, public productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      url => {
        console.log('url', url['id'])
        this.productService.getProductDetailById(url['id']).subscribe(
          data => {
            console.log('data', data)
            this.product = data
          }
        )

      }
    )
  }

}

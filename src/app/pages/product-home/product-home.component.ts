import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HeroSliderComponent } from "../../layout/hero-slider/hero-slider.component";
import { TestimonialCarouselComponent } from "../../layout/testimonial-carousel/testimonial-carousel.component";

@Component({
  selector: 'app-product-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroSliderComponent, TestimonialCarouselComponent],
  providers: [],
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
})
export class ProductHomeComponent {
  products: any;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    return this.productService
      .getFeaturedProducts()
      .subscribe((data: any) => (
        console.log(data),
        this.products = data));
  }
}

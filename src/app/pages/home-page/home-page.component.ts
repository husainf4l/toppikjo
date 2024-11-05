import { Component } from '@angular/core';
import { HeroSliderComponent } from "../../layout/hero-slider/hero-slider.component";
import { AvailableAtComponent } from "../../layout/available-at/available-at.component";
import { NewsletterComponent } from "../../layout/newsletter/newsletter.component";
import { ProductShowcaseComponent } from "../../components/product-showcase/product-showcase.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroSliderComponent, AvailableAtComponent, NewsletterComponent, ProductShowcaseComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  productShowcases = [
    { brand: "toppik", title: 'منتجات توبيك' },

  ];

}

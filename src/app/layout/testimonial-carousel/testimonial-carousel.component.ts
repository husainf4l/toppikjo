import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TestimonialCarouselComponent {
  testimonials = [
    {
      text: "This product is amazing! It has changed my life for the better.",
      name: "John Doe",
      occupation: "CEO at ExampleCorp",
      avatar: "https://via.placeholder.com/150"
    },
    {
      text: "A fantastic service that I would recommend to anyone!",
      name: "Jane Smith",
      occupation: "Marketing Manager at SomeCompany",
      avatar: "https://via.placeholder.com/150"
    },
    // Add more testimonials as needed
  ];

  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}

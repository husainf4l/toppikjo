import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [],  // Enable fetch
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  cartId: string = ''; 
  address: string = '';
  mobile: string = '';
  order: any = null;

  constructor(private orderService: OrderService) {}

  placeOrder() {
    this.orderService.createOrder(this.cartId, this.address, this.mobile).subscribe((data) => {
      this.order = data;
      console.log(data)
    });
  }
}

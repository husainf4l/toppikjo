import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  imports: [CommonModule],
  standalone: true
})
export class OrderListComponent implements OnInit {
  orders: any[] = [];

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  viewOrderDetails(orderId: string): void {
    this.router.navigate(['admin/order-details', orderId]);
  }
}

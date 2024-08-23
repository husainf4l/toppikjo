import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthorizedPosService } from '../../services/authorized-pos-service.service';

@Component({
  selector: 'app-authorized-pos-list',
  templateUrl: './authorized-pos-list.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class AuthorizedPosListComponent implements OnInit {
  authorizedPosList: any[] = [];

  constructor(private authorizedPosService: AuthorizedPosService) { }

  ngOnInit(): void {
    this.loadAuthorizedPos();
  }

  loadAuthorizedPos(): void {
    this.authorizedPosService.getAuthorizedAllPointsOfSale().subscribe((data: any[]) => {
      this.authorizedPosList = data;
    });
  }

  deleteAuthorizedPos(id: string): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.authorizedPosService.deleteAuthorizedPointOfSale(id).subscribe(() => {
        this.loadAuthorizedPos(); // Refresh the list after deletion
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorizedPosService } from '../../services/authorized-pos-service.service';
import { FileUploadService } from '../../services/upload-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authorized-pos-form',
  templateUrl: './authorized-pos-form.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AuthorizedPosFormComponent implements OnInit {
  id: string | null = null;
  name: string = '';
  description: string = '';
  location: string = '';
  logo: string = '';
  branches: number = 1;
  category: string = '';

  selectedFile: File | null = null;

  constructor(
    private authorizedPosService: AuthorizedPosService,
    private fileUploadService: FileUploadService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.loadAuthorizedPosDetails(this.id);
      }
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  loadAuthorizedPosDetails(id: string): void {
    this.authorizedPosService.getAuthorizedPointOfSaleById(id).subscribe(authorizedPos => {
      if (authorizedPos) {
        this.name = authorizedPos.name;
        this.description = authorizedPos.description;
        this.location = authorizedPos.location;
        this.logo = authorizedPos.logo;
        this.branches = authorizedPos.branches;
        this.category = authorizedPos.category;
      }
    });
  }

  submitForm(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadImage(this.selectedFile).subscribe(uploadResponse => {
        this.logo = uploadResponse.url;
        this.saveAuthorizedPos();
      });
    } else {
      this.saveAuthorizedPos();
    }
  }

  private saveAuthorizedPos(): void {
    const authorizedPosData = {
      name: this.name,
      description: this.description,
      location: this.location,
      logo: this.logo,
      branches: this.branches,
      category: this.category
    };

    if (this.id) {
      this.authorizedPosService.updateAuthorizedPointOfSale(this.id, authorizedPosData).subscribe(() => {
        this.router.navigate(['/admin/authorized-pos']);
      });
    } else {
      this.authorizedPosService.createAuthorizedPointOfSale(authorizedPosData).subscribe(() => {
        this.router.navigate(['/admin/authorized-pos']);
      });
    }
  }
}

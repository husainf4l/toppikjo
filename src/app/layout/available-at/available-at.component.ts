import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-available-at',
  standalone: true,
  imports: [
    CommonModule, RouterLink
  ],
  templateUrl: './available-at.component.html',
  styleUrl: './available-at.component.css'
})
export class AvailableAtComponent {
  logos = [
    { src: 'assets/poslogo/leen.png', alt: 'Leen' },
    { src: 'assets/poslogo/drugcenter.png', alt: 'DrugCenter' },
    { src: 'assets/poslogo/cashmer.png', alt: 'Cashmer' },
    { src: 'assets/poslogo/real.png', alt: 'Real' },
    { src: 'assets/poslogo/sharmeran.png', alt: 'Sharmeran' },
    { src: 'assets/poslogo/mall.png', alt: 'mall' },
    { src: 'assets/poslogo/razy.png', alt: 'Alrazy' },
    { src: 'assets/poslogo/mrblack.png', alt: 'Mrblack' },
    { src: 'assets/poslogo/indola.png', alt: 'Indola' },
  ]
}

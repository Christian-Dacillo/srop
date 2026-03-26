import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class CertificateComponent {
  isPreview = true;
  printMode: 'none' | 'background' | 'data' = 'none';

  printWithBackground() {
    this.isPreview = true;
    this.printMode = 'background';
    setTimeout(() => {
      window.print();
      setTimeout(() => { this.printMode = 'none'; }, 500);
    }, 150);
  }

  print() {
    this.isPreview = false;
    this.printMode = 'data';
    setTimeout(() => {
      window.print();
      setTimeout(() => { this.isPreview = true; this.printMode = 'none'; }, 500);
    }, 150);
  }
}

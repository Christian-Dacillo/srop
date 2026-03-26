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
  // Exam section data
  typeClass = '';
  dateTaken = '';
  place = '';
  rating = '';
  orNo = '';
  amount = '';
  date = '';
  signatoryName = 'ENGR. FRANCIS THOMAS M. ALFANTA';
  signatoryTitle = '';

  // Certificate data
  registrationNo = '';
  name = '';
  address1 = '';
  address2 = ' ';
  birthdate = '';
  citizenship = '';
  sex = '';
  height = '';
  weight = '';
  dateIssued = '';
  validUntil = '';
  commissionSignatory = 'ATTY. JUDY ANN N. BILANGEL';
  commissionTitle = 'OIC - Regional Director, RV';
  snNumber = '';

  isPreview = true;

  showPreview() {
    this.isPreview = true;
  }

  print() {
    this.isPreview = false;
    setTimeout(() => {
      window.print();
      setTimeout(() => (this.isPreview = true), 500);
    }, 100);
  }
}

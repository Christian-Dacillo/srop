import { Component } from '@angular/core';
import { CertificateComponent } from './certificate/certificate';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CertificateComponent],
  template: '<app-certificate></app-certificate>'
})
export class App {}

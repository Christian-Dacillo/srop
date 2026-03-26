import { Component } from '@angular/core';
import { CertificateComponent } from './certificate/certificate';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CertificateComponent],
  template: '<app-certificate></app-certificate>',
  styles: [`
    :host { display: block; }
  `]
})
export class App {}

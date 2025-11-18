import { Component } from '@angular/core';
import { NavbarComponent } from "../main-content/landing-page/navbar/navbar.component";
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
constructor(public mainTs: MainContentComponent){}
}

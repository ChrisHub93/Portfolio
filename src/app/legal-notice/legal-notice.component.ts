import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/components/navbar/navbar.component";
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
constructor(public lang: LanguageService){}
}

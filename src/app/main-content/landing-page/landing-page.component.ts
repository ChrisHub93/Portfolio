import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { LanguageService } from '../../language.service';
import { NavbarMobileComponent } from '../../shared/components/navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, NavbarMobileComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(public lang: LanguageService) {}

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

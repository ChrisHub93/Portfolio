import { Component } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {
constructor(public lang: LanguageService) {}

  langTexts = {
    en: {
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
    },
    de: {
      about: 'Über mich',
      skills: 'Skills',
      projects: 'Projekte',
    },
  };
}

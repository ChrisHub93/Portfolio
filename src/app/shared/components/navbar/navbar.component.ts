import { Component } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
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

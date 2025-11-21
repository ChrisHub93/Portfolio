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

burgerMenuOpen = false;

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


  openMenu() {
    this.burgerMenuOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeMenu() {
    this.burgerMenuOpen = false;
    document.body.classList.remove('no-scroll');
  }
}

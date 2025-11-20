import { Component } from '@angular/core';
import { LanguageService } from '../../../language.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
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

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

constructor(public lang: LanguageService){}

}

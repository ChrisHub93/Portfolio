import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { AppComponent } from '../../app.component';
import { MainContentComponent } from '../main-content.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent{
  constructor(public mainTs: MainContentComponent){}

}

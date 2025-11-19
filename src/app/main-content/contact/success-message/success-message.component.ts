import { Component } from '@angular/core';
import { MainContentComponent } from '../../main-content.component';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-success-message',
  standalone: true,
  imports: [],
  templateUrl: './success-message.component.html',
  styleUrl: './success-message.component.scss',
})
export class SuccessMessageComponent {
  constructor(public lang: LanguageService) {}

  langTexts = {
    en: {
      headline: `Thank you for your message!`,
      text: `Your email has been successfully sent.<br/> Have a great day!`,
    },
    de: {
      headline: `Danke für deine Nachricht!`,
      text: `Deine Email wurde erfolgreich versendet.<br/> Hab noch einen schönen Tag!`,
    },
  };
}

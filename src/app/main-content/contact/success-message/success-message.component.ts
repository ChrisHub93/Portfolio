import { Component } from '@angular/core';
import { MainContentComponent } from '../../main-content.component';

@Component({
  selector: 'app-success-message',
  standalone: true,
  imports: [],
  templateUrl: './success-message.component.html',
  styleUrl: './success-message.component.scss'
})
export class SuccessMessageComponent {
constructor(public mainTs: MainContentComponent){}

}

import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
constructor(public mainTs: AppComponent){}
}

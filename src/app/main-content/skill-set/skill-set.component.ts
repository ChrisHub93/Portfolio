import { Component } from '@angular/core';
import { MainContentComponent } from '../main-content.component';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skillList = [
    'HTML',
    'CSS',
    'JavaScript',
    'Material Design',
    'TypeScript',
    'Angular',
    'Firebase',
    'Git',
    'REST-API',
    'Scrum',
  ];

  constructor(public mainTs: MainContentComponent){}
}

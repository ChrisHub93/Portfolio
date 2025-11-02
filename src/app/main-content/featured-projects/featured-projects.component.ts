import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
  imports: [NgClass],
})
export class FeaturedProjectsComponent {
  showJoinImg = false;
  showElPolloLocoImg = false;
  showDABubbleImg = false;

  projects = [
    {
      name: 'Join',
      skills: ['TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    },
    {
      name: 'El Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ',
    },
    {
      name: 'DA Bubble',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ',
    },
  ];

  showImage(name: string) {
    this.resetImages();
    const key = `show${name.replace(/\s+/g, '')}Img`;
    (this as any)[key] = true;
  }

  hideImage(name: string) {
    (this as any)[`show${name}Img`] = false;
  }

  private resetImages() {
    this.showJoinImg = false;
    this.showElPolloLocoImg = false;
    this.showDABubbleImg = false;
  }
}

import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectInfoComponent } from './project-info/project-info.component';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
  imports: [ProjectInfoComponent],
})
export class FeaturedProjectsComponent {
  projectInfoOpen = false;
  selectedProject: any = null;
  projects = [
    {
      id: '01',
      name: 'Join',
      skills: ['TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    },
    {
      id: '02',
      name: 'El Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ',
    },
    {
      id: '03',
      name: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'CSS', 'REST-API'],
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    },
    {
      id: '04',
      name: 'DA Bubble',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    },
  ];

  openProjectInfo(project: any) {
    this.selectedProject = project;
  }

  closeProjectInfo() {
    this.selectedProject = null;
  }
}

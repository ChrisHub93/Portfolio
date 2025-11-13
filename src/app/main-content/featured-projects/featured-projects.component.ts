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
      name: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'CSS', 'REST-API'],
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      links: {
        gitHub: 'https://github.com/ChrisHub93/Pokedex',
        liveTest:
          'https://christian-mueller.developerakademie.net/Pokedex/index.html',
      },
    },
    {
      id: '02',
      name: 'Join',
      skills: ['TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      links: {
        gitHub: 'https://github.com/ChrisHub93/Join-Gruppenprojekt',
        liveTest:
          'https://join-464.developerakademie.net/index.html',
      },
    },
    {
      id: '03',
      name: 'El Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ',
      links: {
        gitHub: 'https://github.com/ChrisHub93/El_Pollo_Loco',
        liveTest:
          'https://christian-mueller.developerakademie.net/El_Pollo_Loco/',
      },
    },

    {
      id: '04',
      name: 'DA Bubble (in Progress)',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      links: {
        gitHub: '',
        liveTest:
          '',
      },
    },
  ];

  openProjectInfo(project: any) {
    this.selectedProject = project;
  }

  closeProjectInfo() {
    this.selectedProject = null;
  }
}

import { Component } from '@angular/core';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
  imports: [ProjectInfoComponent],
})
export class FeaturedProjectsComponent {
  constructor(public lang: LanguageService) {}
  projectInfoOpen = false;
  selectedProject: any = null;
  projects = [
    {
      id: '01',
      name: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'CSS', 'REST-API'],
      description:
        'API-based app to display Pokémon stats, evolution chains, and species.',
      challange:
        'My first project working extensively with an external API, learning to manage asynchronous data and structure information efficiently.',
      links: {
        gitHub: 'https://github.com/ChrisHub93/Pokedex',
        liveTest:
          'https://christian-mueller.developerakademie.net/Pokedex/index.html',
      },
      inProgress: false,
    },
    {
      id: '02',
      name: 'Join',
      skills: ['TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Task manager inspired by the Kanban system. Users can create, organize, and move tasks via drag and drop, and assign categories and team members.',
      challange:
        'It was my first team project using GitHub, where I learned to organize my work independently and communicate the right information to support my teammates effectively. Working closely with two other coders also helped me learn a lot through collaboration.',
      links: {
        gitHub: 'https://github.com/ChrisHub93/Join-Gruppenprojekt',
        liveTest: 'https://join-464.developerakademie.net/index.html',
      },
      inProgress: false,
    },
    {
      id: '03',
      name: 'El Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ',
      challange:
        'The main focus was object-oriented programming — building a game using loops, handling character movement, and detecting collisions between different objects.',
      links: {
        gitHub: 'https://github.com/ChrisHub93/El_Pollo_Loco',
        liveTest:
          'https://christian-mueller.developerakademie.net/El_Pollo_Loco/',
      },
      inProgress: false,
    },

    {
      id: '04',
      name: 'DA Bubble',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      challange: '',
      links: {
        gitHub: '',
        liveTest: '',
      },
      inProgress: true,
    },
  ];

  langTexts = {
    en: {
      title: 'Featured Projects',
      textPortfolio: `Explore a selection of my work here - Interact with
        projects to see my skills in action.`,
    },
    de: {
      title: 'Meine Projekte',
      textPortfolio: `Entdecke hier eine Auswahl meiner Arbeiten – 
        interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.`,
    },
  };

  openProjectInfo(project: any) {
    this.selectedProject = project;
    document.body.classList.add('no-scroll');
  }

  closeProjectInfo() {
    this.selectedProject = null;
    document.body.classList.remove('no-scroll');
  }
}

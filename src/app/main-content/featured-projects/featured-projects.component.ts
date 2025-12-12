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
      descriptionEN: `API-based app to display Pokémon stats, evolution chains, and species.`,
      challangeEN: `My first project working extensively with an external API, learning to 
        manage asynchronous data and structure information efficiently.`,
      descriptionDE: `API-basierte App zur Anzeige von Pokémon-Statistiken, Evolutionsketten und Spezies.`,
      challangeDE: `Mein erstes Projekt, bei dem ich intensiv mit einer externen API gearbeitet habe. 
        Dabei habe ich gelernt, asynchrone Daten zu verwalten und Informationen effizient zu strukturieren.`,
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
      descriptionEN: `Task manager inspired by the Kanban system. Users can create,
         organize, and move tasks via drag and drop, and assign categories and team members.`,
      challangeEN: `The main focus here was to apply everything I had learned so far and to organize
       myself within the team. Through close collaboration with two other developers, 
       I was also able to learn a lot of new things.`,
      descriptionDE: `Ein Task-Manager, inspiriert vom Kanban-System. Nutzer können Aufgaben erstellen, 
        organisieren und per Drag & Drop verschieben sowie Kategorien und Teammitglieder zuweisen.`,
      challangeDE: `Schwerpunkt war hier, alles bisher gelernte umzusetzen und sich im Team zu organisieren.
       Durch die enge Zusammenarbeit mit zwei weiteren Entwicklern konnte ich zudem viel neues lernen.`,
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
      descriptionEN: `Jump, run and throw game based on object-oriented approach. Help Pepe to 
        find coins and tabasco salsa to fight against the crazy hen. `,
      challangeEN: `The main focus was object-oriented programming — building a game using loops,
         handling character movement, and detecting collisions between different objects.`,
      descriptionDE: `Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe,
         Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.`,
      challangeDE: `Der Schwerpunkt lag auf objektorientierter Programmierung — ein Spiel 
        mit Schleifen zu erstellen, die Bewegung der Spielfigur zu steuern und Kollisionen 
        zwischen Objekten zu erkennen.`,

      links: {
        gitHub: 'https://github.com/ChrisHub93/El_Pollo_Loco',
        liveTest:
          'https://christian-mueller.developerakademie.net/El_Pollo_Loco/',
      },
      inProgress: false,
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

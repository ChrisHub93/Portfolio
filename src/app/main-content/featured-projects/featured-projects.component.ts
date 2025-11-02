import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectInfoComponent } from "./project-info/project-info.component";

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
  imports: [NgClass, ProjectInfoComponent],
})
export class FeaturedProjectsComponent {
  showJoinImg = false;
  showElPolloLocoImg = false;
  showDABubbleImg = false;
  projectInfoOpen = true;

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
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    },
  ];

  selectedProject: any = null;

  openProjectInfo(project: any) {
    this.selectedProject = project;
  }

  closeProjectInfo() {
    this.selectedProject = null;
  }

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

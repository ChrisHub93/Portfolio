import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainContentComponent } from '../../main-content.component';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss',
})
export class ProjectInfoComponent {
  constructor(
    public mainTs: MainContentComponent,
    public lang: LanguageService
  ) {}
  @Input() project: any;
  @Input() projects: any[] = [];
  @Output() close = new EventEmitter<void>();

  langTexts = {
    en: {
      aboutTitle: `What is this project about?`,
      challangeTitle: `What I have learned`,
    },
    de: {
      aboutTitle: `Über das Projekt`,
      challangeTitle: `Was habe ich gelernt`,
    },
  };

  closeInfo() {
    this.close.emit();
  }

  nextProject() {
    const currentIndex = this.projects.findIndex(
      (p) => p.id === this.project.id
    );
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.project = this.projects[nextIndex];
  }
}

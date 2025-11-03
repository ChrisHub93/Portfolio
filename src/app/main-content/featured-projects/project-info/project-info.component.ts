import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss',
})
export class ProjectInfoComponent {
  @Input() project: any;
  @Input() projects: any[] = [];
  @Output() close = new EventEmitter<void>();

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

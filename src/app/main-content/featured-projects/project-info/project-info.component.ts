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
  @Output() close = new EventEmitter<void>();

  closeInfo() {
    this.close.emit();
  }
}

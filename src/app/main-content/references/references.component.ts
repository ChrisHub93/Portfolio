import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = [
    {
      id: 'comment_1',
      active: false,
      autor: 'T.Schulz - Frontend Developer',
      comment:
        'Our project benefited enormously from Lukas efficient way of working.',
    },
    {
      id: 'comment_2',
      active: true,
      autor: 'H.Janisch - Team Partner',
      comment:
        'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project. ',
    },
    {
      id: 'comment_3',
      active: false,
      autor: 'A. Fischer - Team Partner',
      comment:
        'I had the good fortune of working with Simon in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He is super knowledgeable, easy to work with, and I did happily work with him again given the chance.',
    },
    {
      id: 'comment_4',
      active: false,
      autor: 'A. Fischer - Team Partner',
      comment: 'blabla',
    },
  ];

  commentWidth: number = 632;
  gap: number = 64;
  displayComments: any[] = [];
  displayIndex: number = 0;
  transitionEnabled: boolean = true;
  isTransitioning: boolean = false;
  transitionDurationMs: number = 500;

  constructor() {
    this.setupDisplayComments();
    this.updateWidthsForMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        this.transitionEnabled = false;
        this.updateWidthsForMobile();
        setTimeout(() => (this.transitionEnabled = true), 100);
      });
    }
  }

  get activeIndex(): number {
    return this.references.findIndex((r) => r.active);
  }

  private setupDisplayComments() {
    const totalItems = this.references.length;
    if (totalItems === 0) return;

    this.displayComments = [
      this.references[totalItems - 1],
      ...this.references,
      this.references[0],
    ];

    this.displayIndex = this.activeIndex + 1;
  }

  setActive(id: string) {
    if (this.isTransitioning) return;
    const newActiveIndex = this.references.findIndex((ref) => ref.id === id);

    if (newActiveIndex === this.activeIndex) return;
    this.isTransitioning = true;
    this.transitionEnabled = true;

    this.references.forEach((ref) => (ref.active = ref.id === id));
    this.displayIndex = newActiveIndex + 1;

    setTimeout(() => {
      this.isTransitioning = false;
    }, this.transitionDurationMs);
  }

  next() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.transitionEnabled = true;
    this.displayIndex++;

    const newActiveIndex = (this.activeIndex + 1) % this.references.length;
    this.references.forEach((ref, i) => (ref.active = i === newActiveIndex));

    setTimeout(() => {
      if (this.displayIndex === this.references.length + 1) {
        this.transitionEnabled = false;
        this.displayIndex = 1;
      }
      this.isTransitioning = false;
    }, this.transitionDurationMs);
  }

  prev() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.transitionEnabled = true;
    this.displayIndex--;

    const newActiveIndex =
      (this.activeIndex - 1 + this.references.length) % this.references.length;
    this.references.forEach((ref, i) => (ref.active = i === newActiveIndex));

    setTimeout(() => {
      if (this.displayIndex === 0) {
        this.transitionEnabled = false;
        this.displayIndex = this.references.length;
      }
      this.isTransitioning = false;
    }, this.transitionDurationMs);
  }

  private updateWidthsForMobile() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.commentWidth = window.innerWidth * 0.85;
        this.gap = 20;
      } else {
        this.commentWidth = 632;
        this.gap = 64;
      }
    }
  }
}

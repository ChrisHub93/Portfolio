import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  @ViewChildren('commentItem') commentItems!: QueryList<ElementRef>;

  currentID: number = 1;
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
      autor: 'T.Schulz - Frontend Developer',
      comment:
        'Our project benefited enormously from Simon efficient way of working.',
    },
  ];

  scrollActiveIntoView() {
    const activeIndex = this.references.findIndex((r) => r.active);
    const activeEl = this.commentItems.toArray()[activeIndex]?.nativeElement;
    activeEl?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }

  setActive(id: string) {
    this.references.forEach((ref) => (ref.active = ref.id === id));
  }
  
  next() {
    const activeIndex = this.references.findIndex((r) => r.active);

    if (activeIndex < this.references.length - 1) {
      this.references[activeIndex].active = false;
      this.references[activeIndex + 1].active = true;
    } else {
      this.references[activeIndex].active = false;
      this.references[0].active = true;
    }

    this.scrollActiveIntoView();
  }

  prev() {
    const activeIndex = this.references.findIndex((r) => r.active);

    if (activeIndex > 0) {
      this.references[activeIndex].active = false;
      this.references[activeIndex - 1].active = true;
    } else {
      this.references[activeIndex].active = false;
      this.references[this.references.length - 1].active = true;
    }

    this.scrollActiveIntoView();
  }
}

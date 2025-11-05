import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent implements AfterViewInit{
  @ViewChildren('commentItem') commentItems!: QueryList<HTMLElement>;
  currentID:number = 2;
  references = [
    {
      id: "comment_1",
      active: false,
      autor: 'T.Schulz - Frontend Developer',
      comment:
        'Our project benefited enormously from Lukas efficient way of working.',
    },
    {
      id: "comment_2",
      active: true,
      autor: 'H.Janisch - Team Partner',
      comment:
        'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project. ',
    },
    {
      id: "comment_3",
      active: false,
      autor: 'A. Fischer - Team Partner',
      comment:
        'I had the good fortune of working with Simon in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He is super knowledgeable, easy to work with, and I did happily work with him again given the chance.',
    },
    {
      id: "comment_4",
      active: false,
      autor: 'T.Schulz - Frontend Developer',
      comment:
        'Our project benefited enormously from Simon efficient way of working.',
    },
  ];

  ngAfterViewInit() {
    this.scrollActiveIntoView();
  }
  scrollActiveIntoView() {
    const activeIndex = this.references.findIndex(r => r.active);
    const activeElement = this.commentItems.toArray()[activeIndex];

    activeElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  setActive(id: string) {
    this.references.forEach(ref => ref.active = ref.id === id);
    this.scrollActiveIntoView();
  }
}

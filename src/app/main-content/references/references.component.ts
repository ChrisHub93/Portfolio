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
    // 1. Setup der virtuellen Liste
    this.setupDisplayComments();
    // 2. Setup der Breiten
    this.updateWidthsForMobile();
    // 3. Listener für Resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        // Beim Resize müssen wir die Breiten neu berechnen UND
        // die Transition kurz deaktivieren, damit es nicht komisch "hinfliegt".
        this.transitionEnabled = false;
        this.updateWidthsForMobile();
        // Kurze Verzögerung, damit der Resize abgeschlossen ist, bevor Transitions wieder erlaubt sind.
        setTimeout(() => (this.transitionEnabled = true), 100);
      });
    }
  }

  /**
   * Berechnet den Index des *aktiven* Kommentars in der *originalen* 'references'-Liste.
   * Wird für die Navigationspunkte (dots) benötigt.
   */
  get activeIndex(): number {
    return this.references.findIndex((r) => r.active);
  }

  /**
   * NEU: Erstellt die virtuelle 'displayComments'-Liste und setzt den Startindex.
   */
  private setupDisplayComments() {
    const totalItems = this.references.length;
    if (totalItems === 0) return;

    // Erstellt die virtuelle Liste: [Letztes, ...Alle..., Erstes]
    this.displayComments = [
      this.references[totalItems - 1], // Klon des Letzten
      ...this.references, // Alle echten Elemente
      this.references[0], // Klon des Ersten
    ];

    // Setzt den 'displayIndex', sodass er auf das korrekte 'active'-Element zeigt
    // (um 1 verschoben, da wir das letzte Element an den Anfang gestellt haben)
    this.displayIndex = this.activeIndex + 1;
  }

  /**
   * Wird von den Navigationspunkten aufgerufen.
   */
  setActive(id: string) {
    if (this.isTransitioning) return;

    const newActiveIndex = this.references.findIndex((ref) => ref.id === id);
    // Verhindert Klick auf bereits aktiven Punkt
    if (newActiveIndex === this.activeIndex) return;

    this.isTransitioning = true;
    this.transitionEnabled = true;

    // Aktualisiert die 'active'-Flags in der Quell-Liste (für die Punkte)
    this.references.forEach((ref) => (ref.active = ref.id === id));
    // Setzt den displayIndex auf die neue Position (Index + 1 Versatz)
    this.displayIndex = newActiveIndex + 1;

    setTimeout(() => {
      this.isTransitioning = false;
    }, this.transitionDurationMs);
  }

  next() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.transitionEnabled = true;

    // Zum nächsten Element sliden
    this.displayIndex++;

    // 'active'-Flag in der Quell-Liste für die Punkte aktualisieren
    const newActiveIndex = (this.activeIndex + 1) % this.references.length;
    this.references.forEach((ref, i) => (ref.active = i === newActiveIndex));

    // Magie: Prüfen, ob wir am *geklonten* ersten Element (am Ende) angekommen sind
    setTimeout(() => {
      if (this.displayIndex === this.references.length + 1) {
        // Am Klon angekommen (z.B. Index 4 bei 3 Elementen)
        this.transitionEnabled = false; // Animation für den Sprung deaktivieren
        this.displayIndex = 1; // Zum *echten* ersten Element springen (Index 1)
      }
      this.isTransitioning = false;
    }, this.transitionDurationMs);
  }

  prev() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.transitionEnabled = true;

    // Zum vorherigen Element sliden
    this.displayIndex--;

    // 'active'-Flag in der Quell-Liste für die Punkte aktualisieren
    const newActiveIndex =
      (this.activeIndex - 1 + this.references.length) % this.references.length;
    this.references.forEach((ref, i) => (ref.active = i === newActiveIndex));

    // Magie: Prüfen, ob wir am *geklonten* letzten Element (am Anfang) angekommen sind
    setTimeout(() => {
      if (this.displayIndex === 0) {
        // Am Klon angekommen (Index 0)
        this.transitionEnabled = false; // Animation für den Sprung deaktivieren
        this.displayIndex = this.references.length; // Zum *echten* letzten Element springen (z.B. Index 3)
      }
      this.isTransitioning = false;
    }, this.transitionDurationMs);
  }

  private updateWidthsForMobile() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.commentWidth = window.innerWidth * 0.85; // 85vw
        this.gap = 20; // 20px
      } else {
        this.commentWidth = 632;
        this.gap = 64;
      }
    }
  }
}

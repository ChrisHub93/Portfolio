import { Component } from '@angular/core';
import { MainContentComponent } from '../main-content.component';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skillList = [
    'HTML',
    'CSS',
    'JavaScript',
    'Material Design',
    'TypeScript',
    'Angular',
    'Firebase',
    'Git',
    'REST-API',
    'Scrum',
  ];

  langTexts = {
    en: {
      headline: 'Technologies',
      title: 'Skill Set',
      textSkillSet: `  I've built a strong foundation in front-end development and really enjoy
        working with modern tools and frameworks. What excites me most is how
        fast the web evolves — there's always something new to explore. I'm
        genuinely curious and love expanding my skill set, learning new
        technologies, and improving step by step.`,
      textYouNeedOne: `You need `,
      textYouNeedTwo: `another skill? `,
      textContactMe: `Feel free to contact me. I look forward to expanding on my previous
        knowledge.`,
    },
    de: {
      headline: 'Technologien',
      title: 'Fähigkeiten',
      textSkillSet: `Ich habe mir eine solide Grundlage in der Frontend-Entwicklung aufgebaut und 
        arbeite sehr gerne mit modernen Tools und Frameworks. Besonders spannend finde ich, wie 
        schnell sich das Web entwickelt — es gibt immer etwas Neues zu entdecken. Ich bin von Natur 
        aus neugierig, erweitere gerne mein Skillset, lerne neue Technologien kennen und verbessere mich 
        Schritt für Schritt.`,
      textYouNeedOne: `Du brauchst `,
      textYouNeedTwo: `jemand Fähiges ?`,
      textContactMe: `Kontaktiere mich gerne. Ich freue mich darauf, mein Wissen mit dir weiter 
        auszubauen.`,
    },
  };

  constructor(public lang: LanguageService) {}

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

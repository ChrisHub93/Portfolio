import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  constructor(public lang: LanguageService) {}

  langTexts = {
    en: {
      headline: 'Who I Am',
      title: 'About me',
      textAboutMe: `Hey there, I'm Christian! I'm currently turning my hobby into my
        profession. I love coding because there's always something new to learn
        and every challenge helps me grow. Solving a problem is incredibly
        motivating — it shows me that I've improved, and I enjoy using what I've
        learned to tackle the next task even better. My inspiration comes from
        continuously pushing my skills forward and seeing real progress in the
        projects I build.`,
      textLocation: `I'm based in Kerpen (by Cologne). I'm open to working remotely,
          on-site, or in a hybrid setup — whatever fits best with the team and
          the project.`,
      textCognition: `I'm very open-minded and genuinely enjoy learning new technologies.
          I'm always looking for ways to improve my skills and grow as a
          developer`,
      textQuality: `I always aim for efficient and elegant solutions. I rely on deep
          analytical thinking, creativity, persistence, and strategic planning
          to overcome challenges. Each problem helps me grow, and I enjoy
          collaborating with others to find the best possible outcome.`,
    },

    de: {
      headline: 'Wer Ich bin',
      title: 'Über mich',
      textAboutMe: `Hey, ich bin Christian! Ich mache gerade mein Hobby zum Beruf. Ich liebe
        es zu Programmieren, weil es immer etwas Neues zu lernen gibt und mich
        jede Herausforderung weiterbringt. Ein Problem zu lösen motiviert mich
        enorm — es zeigt mir, dass ich mich verbessert habe, und ich nutze das
        Gelernte gerne, um die nächste Aufgabe noch besser zu meistern. Meine
        Inspiration ziehe ich daraus, meine Fähigkeiten ständig
        weiterzuentwickeln und echte Fortschritte in meinen Projekten zu
        sehen.`,
      textLocation: `Ich lebe in Kerpen (bei Köln). Ich bin offen für Remote-Arbeit,
          Präsenzarbeit oder ein hybrides Modell — je nachdem, was am besten zum
          Team und zum Projekt passt.`,
      textCognition: `Ich bin sehr aufgeschlossen und lerne gerne neue Technologien kennen.
          Ich suche immer nach Möglichkeiten, meine Fähigkeiten zu verbessern
          und als Entwickler weiterzuwachsen.`,
      textQuality: `Ich strebe stets nach effizienten und eleganten Lösungen. Ich
          verlasse mich auf tiefgehendes analytisches Denken, Kreativität,
          Ausdauer und strategische Planung, um Herausforderungen zu meistern.
          Jede Aufgabe lässt mich wachsen, und ich arbeite gerne mit anderen
          zusammen, um das bestmögliche Ergebnis zu erreichen.`,
    },
  };
}

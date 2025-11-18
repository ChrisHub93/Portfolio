import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor() {
    this.getLocalLanguge();
  }

  languageEnglish = signal(true);

  setEnglish(set: boolean) {
    if (set) {
      this.languageEnglish.set(true);
      localStorage.setItem('LanguageEnglish', 'true');
    } else {
      this.languageEnglish.set(false);
      localStorage.setItem('LanguageEnglish', 'false');
    }
  }

  getLocalLanguge() {
    const lang = localStorage.getItem('LanguageEnglish');
    if (lang === 'false') {
      this.languageEnglish.set(false);
    } else {
      this.languageEnglish.set(true);
    }
  }
}

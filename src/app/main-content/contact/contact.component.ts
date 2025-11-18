import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SuccessMessageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(public lang: LanguageService) {}
  http = inject(HttpClient);

  accepted = false;
  showMessage = false;

  langTexts = {
    en: {
      headline: `Contact me`,
      title: `Let's work together`,
      problemText: `Got a problem to solve?`,
      infoText: `I'm currently training to become a Frontend Developer and I'm
        excited to take the next step in my career. If you're looking for someone
        who is motivated, eager to learn, and ready to grow with your team, feel
        free to contact me. I'm confident that through my dedication, discipline,
        and passion for clean and efficient solutions, I can bring real value to
        your projects.`,
      needOneText: `Need a Frontend developer?`,
      titleName: `What's your name?`,
      titleEmail: `What's your email?`,
      titleMessage: `How can I help you?`,
      placeholderName: `Your name goes here`,
      placeholderEmail: `youremail@email.com`,
      placeholderMessage: `Hello Christian, I am interested in...`,
      textCheckboxOne: `I've read the `,
      textCheckboxButton: `privacy policy`,
      textCheckboxTwo: `and agree to the processing of my data as outlined.`,
      textButtonSubmit: `Say Hello ;)`,
      errorName: `Oops! it seems your name is missing`,
      errorEmail: `Hoppla! your email is required`,
      errorMessage: `What do you need to develop?`,
      errorCheckbox: `Please accept the policy`,
    },
    de: {
      headline: `Kontaktiere mich`,
      title: `Lass uns zusammen arbeiten`,
      problemText: `Du hast ein Problem zu lösen?`,
      infoText: `Ich befinde mich derzeit in der Weiterbildung zum Frontend Developer 
        und freue mich darauf, den nächsten Schritt in meiner Karriere zu gehen. 
        Wenn du jemanden suchst, der motiviert ist, lernbereit und bereit, gemeinsam 
        mit Ihrem Team zu wachsen, kannst du mich gerne kontaktieren. Mit meiner 
        Hingabe, Disziplin und meinem Fokus auf saubere und effiziente Lösungen kann 
        ich einen wertvollen Beitrag zu deinen Projekten leisten.`,
      needOneText: `Du brauchst einen Frontend Developer?`,
      titleName: `Wie ist dein Name?`,
      titleEmail: `Wie lautet deine E-Mail-Adresse?`,
      titleMessage: `Wie kann ich dir helfen?`,
      placeholderName: `Dein Name`,
      placeholderEmail: `deineEmail@email.de`,
      placeholderMessage: `Hallo Christian, ich bin interessiert an...`,
      textCheckboxOne: `Ich habe die `,
      textCheckboxButton: `Datenschutzerklärung`,
      textCheckboxTwo: `gelesen und stimme der Verarbeitung meiner Daten gemäß den Angaben zu.`,
      textButtonSubmit: `Sag Hallo ;)`,
      errorName: `Oops! Es sieht so aus, als ob dein Name fehlt`,
      errorEmail: `Hoppla! Deine Email ist erforderlich`,
      errorMessage: `Wie kann ich dir weiterhelfen?`,
      errorCheckbox: `Bitte akzeptire die Datenschutzerklärung`,
    },
  };

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
      this.showSuccesMessage();
    }
  }

  showSuccesMessage() {
    this.showMessage = true;
    document.body.classList.add('no-scroll');

    setInterval(() => {
      this.showMessage = false;
      document.body.classList.remove('no-scroll');
    }, 2900);
  }
}

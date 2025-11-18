import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { MainContentComponent } from '../main-content.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SuccessMessageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(public mainTs: MainContentComponent){}
  http = inject(HttpClient);

  accepted = false;
  showMessage = false;

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

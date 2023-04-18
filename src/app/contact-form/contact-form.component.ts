import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    //Animation anzeigen

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);
    //senden 

    await fetch('https://sascha-schroeder.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      body: formData
    })

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    sendButton.value = 'Message has been sent!';
    sendButton.style.color = 'var(--fc-second)';
    setTimeout(() => {
      sendButton.value = 'Send message';
      sendButton.style.color = 'var(--bg-cream)';
    }, 1000);
  }

}




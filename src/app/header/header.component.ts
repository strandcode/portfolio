import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './logo.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;



  navLinkData = [
    { link: "#home", text: "Home" },
    { link: "#aboutMe", text: "About me" },
    { link: "#mySkills", text: "My skills" },
    { link: "#myPortfolio", text: "My portfolio" },
    { link: "#contactMe", text: "Contact me" },
  ];

  constructor(private linkservice: LinkService) {

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.linkservice.isPrivacyLink = false;
    console.log(this.linkservice.isPrivacyLink);
  }


  scrollToPrivacy() {
    this.linkservice.isPrivacyLink = true;
    console.log(this.linkservice.isPrivacyLink);
  }

}

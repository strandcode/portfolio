import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  scrollToPrivacy() {
    this.router.navigateByUrl('/imprint');
    document.getElementById('privacy')?.scrollIntoView();
  }

}

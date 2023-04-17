import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './logo.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  navLinkData = [
    { link: "./index.html", text: "Home" },
    { link: "#aboutMe", text: "About me" },
    { link: "#mySkills", text: "My skills" },
    { link: "#myPortfolio", text: "My portfolio" },
    { link: "#contactMe", text: "Contact me" },
    // { link: "#", text: "Legal notice" },
    // { link: "#", text: "Privacy policy" }
  ]

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}

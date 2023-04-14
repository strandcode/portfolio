import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  portfolioData = [
    {
      portfolioTitle: "Join",
      portfolioSkills: "JavaScript | CSS | HTML",
      portfolioDescription: "Task manager inspired by the Kanban Sytem. Create and organize tasks using drag and drop functions, assign users and categories.",
      portfolioLink: "#",
      portfolioLinkGitHub: "#"
    },
    {
      portfolioTitle: "El Pollo Loco",
      portfolioSkills: "JavaScript | CSS | HTML",
      portfolioDescription: "A simple jump-and-run game based on an object-oriented approach. Help Pepe to find coins an fight against the angry rooster.",
      portfolioLink: "#",
      portfolioLinkGitHub: "#"
    },
    {
      portfolioTitle: "Simple CRM",
      portfolioSkills: "Angular | Firebase",
      portfolioDescription: "A very simple Customer Relationship Management system working with CRUD functionality.",
      portfolioLink: "#",
      portfolioLinkGitHub: "#"
    },
    {
      portfolioTitle: "Pokédex",
      portfolioSkills: "JavaScript | API | CSS | HTML",
      portfolioDescription: "Based on the PokéAPI a simple library that provides and catalogues pokémon information.",
      portfolioLink: "#",
      portfolioLinkGitHub: "#"
    },
  ];




  generateLength() {
    let portfolioCount: any = '';

    if (this.portfolioData.length < 10) {
      portfolioCount = this.portfolioData.length;
      portfolioCount = portfolioCount.toString().padStart(2, '0');
    } else {
      portfolioCount = portfolioCount.toString();
    }
    return portfolioCount;
  }



}

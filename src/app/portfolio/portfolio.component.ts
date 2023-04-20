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
      portfolioImage: "./assets/img/portfolio-join.png",
      portfolioSkills: "JavaScript | CSS | HTML",
      portfolioDescription: "Task manager inspired by the Kanban Sytem. Create and organize tasks using drag and drop functions, assign users and categories.",
      portfolioLink: "https://strandco.de/join/",
      portfolioLinkGitHub: "https://github.com/strandcode/join"
    },
    {
      portfolioTitle: "El Pollo Loco",
      portfolioImage: "./assets/img/portfolio-el-pollo-loco.png",
      portfolioSkills: "JavaScript | CSS | HTML",
      portfolioDescription: "A simple jump-and-run game based on an object-oriented approach. Help Pepe to find coins an fight against the angry rooster.",
      portfolioLink: "https://strandco.de/el-pollo-loco/",
      portfolioLinkGitHub: "https://github.com/strandcode/el-pollo-loco"
    },
    // {
    //   portfolioTitle: "Simple CRM",
    //   portfolioImage: "./assets/img/portfolio-image-dummy.png",
    //   portfolioSkills: "Angular | Firebase",
    //   portfolioDescription: "A very simple Customer Relationship Management system working with CRUD functionality.",
    //   portfolioLink: "#",
    //   portfolioLinkGitHub: "#"
    // },
    {
      portfolioTitle: "Pokédex",
      portfolioImage: "./assets/img/portfolio-pokedex.png",
      portfolioSkills: "JavaScript | API | CSS | HTML",
      portfolioDescription: "Based on the PokéAPI a simple library that provides and catalogues pokémon information.",
      portfolioLink: "https://strandco.de/pokedex/",
      portfolioLinkGitHub: "https://github.com/strandcode/pokedex"
    },
  ];




  doubleDigit(x: number) {
    let doubleDigit: any = '';
    doubleDigit = x;

    if (x < 10) {
      doubleDigit = doubleDigit.toString().padStart(2, '0');
    } else {
      doubleDigit = doubleDigit.toString();
    }
    return doubleDigit;
  }



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = [
    { skillName: "Angular", skillIconPath: "../../assets/img/skill-angular.png" },
    { skillName: "Typescript", skillIconPath: "../../assets/img/skill-typescript.png" },
    { skillName: "JavaScript", skillIconPath: "../../assets/img/skill-javascript.png" },
    { skillName: "HTML", skillIconPath: "../../assets/img/skill-html.png" },
    { skillName: "CSS", skillIconPath: "../../assets/img/skill-css.png" },
    { skillName: "Firebase", skillIconPath: "../../assets/img/skill-firebase.png" },
    { skillName: "Git", skillIconPath: "../../assets/img/skill-git.png" },
    { skillName: "Rest-Api", skillIconPath: "../../assets/img/skill-rest-api.png" },
    { skillName: "Scrum", skillIconPath: "../../assets/img/skill-scrum.png" },
    { skillName: "Material-Design", skillIconPath: "../../assets/img/skill-material-design.png" },
  ]

}

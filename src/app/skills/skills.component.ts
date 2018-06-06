import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillsService.getSkills().subscribe(skills => this.skills = skills);
}
}
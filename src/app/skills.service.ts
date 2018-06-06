import { Injectable } from '@angular/core';

import { Skill } from './skill';
import { Level } from './level.enum';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { SKILLS } from './mock-skills';

@Injectable()
export class SkillsService {
    skillsArray: Skill[] = [
        {
            id: 1,
            skill: 'Angular',
            level: Level.Beginner
        },
        {
            id: 2,
            skill: 'JavaScript',
            level: Level.Advanced
        },
        {
            id: 3,
            skill: 'HTML',
            level: Level.Expert
        },
        {
            id: 4,
            skill: 'CSS',
            level: Level.Expert
    }      
    ];

    getSkills = (): Observable<Skill[]> => {
        return of(SKILLS);
    }
  }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'skillLevel' })
export class SkillLevelPipe implements PipeTransform {
	transform(value: number, args: number[]): string {
		switch (value) {
			case 1:
				return 'Beginner';
			case 2:
				return 'Intermediate';
			case 3:
				return 'Advanced';
			case 4:
				return 'Expert';
			default:
				return 'Beginner';
		}
	}
}
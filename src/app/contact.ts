import { Group } from './group.enum';

export class Contact {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    group: Group;
}

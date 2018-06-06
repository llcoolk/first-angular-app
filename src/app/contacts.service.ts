import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Group } from './group.enum';
import { Observable, of } from 'rxjs';
import { CONTACTS } from './mock-contacts';


@Injectable()
export class ContactsService {
    contactsArray: Contact[] = [
      {
                id: 1,
                firstName: 'Abe',
                lastName: 'Lincoln',
                phoneNumber: '111-222-3333',
                email: 'abe@test.com',
                group: Group.Friend
            },
            {
                id: 2,
                firstName: 'Brian',
                lastName: 'Johnson',
                phoneNumber: '222-333-4444',
                email: 'bj@my.com',
                group: Group.Work
        
            },
            {
                id: 3,
                firstName: 'Cindy',
                lastName: 'Jacobs',
                phoneNumber: '333-444-5555',
                email: 'cj@test.com',
                group: Group.School
            },
            {
                id: 4,
                firstName: 'Doug',
                lastName: 'Addison',
                phoneNumber: '444-555-6666',
                email: 'da@me.com',
                group: Group.Work
            },
            {
                id: 5,
                firstName: 'Eddie',
                lastName: 'Moon',
                phoneNumber: '555-666-7777',
                email: 'em@me.com',
                group: Group.School
                },
            {
                id: 6,
                firstName: 'Freddie',
                lastName: 'Moon',
                phoneNumber: '555-666-7777',
                email: 'fm@gmail.com',
                group: Group.Friend
            }         
];


    getContacts = (): Observable<Contact[]> => {
        return of(CONTACTS);
    }
  }
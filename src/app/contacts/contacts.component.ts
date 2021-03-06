import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Group } from '../group.enum';
import { CONTACTS } from '../mock-contacts';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getContacts();
  }
  getContacts(): void {
    this.contactsService.getContacts().subscribe(contacts => this.contacts = contacts);
  console.log(this.contacts);
  }
}


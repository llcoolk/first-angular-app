import { Component, OnInit } from '@angular/core'; 
import { Message } from '../models/message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactRequest: Message;

	onSubmit() {
		this.contactRequest = JSON.stringify(this) as Message;

		console.log('Submit Successful: ', this.contactRequest);
	}



  constructor() { }

  ngOnInit() {
  }

}

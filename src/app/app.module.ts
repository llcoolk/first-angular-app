import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillLevelPipe } from './skill-level.pipe';
import { SkillsService } from './skills.service';
import { GreetingComponent } from './greeting/greeting.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillLevelPipe,
    GreetingComponent,
    ContactFormComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [SkillsService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

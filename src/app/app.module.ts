import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import {ContactsService} from './services/contacts.service';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MessagesComponent } from './components/messages/messages.component';

const appRoutes = [
	{ path: 'contacts', component: ContactsListComponent },
	{ path: 'messages', component: MessagesComponent },
	{ path: '', redirectTo: '/contacts', pathMatch: 'full' }


]
 
@NgModule({
  declarations: [
    AppComponent,
    ExponentialPipe,
    ContactsListComponent,
    LayoutComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

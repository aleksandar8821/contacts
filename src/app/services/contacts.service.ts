import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor() { }
  getContacts(){
  	return [
  		{id: 1, firstName: 'John', lastName: 'Doe', number: "5555-6351"},
  		{id: 2, firstName: 'Jane', lastName: 'Doe', number: "5555-2135"}
  	];
  }

}

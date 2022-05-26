import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.apiUrl}/contacts`)
  }

  addContact(contact: Partial<Contact>): Observable<Contact> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(contact);
    return this.http.post<Contact>(`${environment.apiUrl}/contacts`,
      contact, { headers: headers },
    )
  }

  editContact(contact: Partial<Contact>) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(contact);
    return this.http.put<Contact>(`${environment.apiUrl}/contacts/${contact._id}`,
      contact, { headers: headers });
  }

  delContact(contactId: string) {
    return this.http.delete<boolean>(`${environment.apiUrl}/contacts/${contactId}`)
  }

}

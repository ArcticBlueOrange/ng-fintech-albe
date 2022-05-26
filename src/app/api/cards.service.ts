import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card, CardForm, CardWithMovements, Movement } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  // getCards(): Observable<Card[]> {
  getCards(): Observable<CardWithMovements[]> {
    return this.http.get<CardWithMovements[]>(`${environment.apiUrl}/cards`);
  }

  addCard(card: CardForm): Observable<CardWithMovements> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(card);
    // console.log(body);
    return this.http.post(`${environment.apiUrl}/cards`,
    card, { headers: headers }) as any;
    // todo replace any
  }

  delCard(cardId: string) {
    if (cardId)
      return this.http.delete(`${environment.apiUrl}/cards/${cardId}`);
    else
      return of(false);
  }

    // todo replace any to movement[], total
  getMovements(cardId: string, limit = 5, offset = 0): Observable<any> {
    return this.http.get(`${environment.apiUrl}/cards/${cardId}/movements`,
      { params: { limit: limit, offset: offset } });
  }
}

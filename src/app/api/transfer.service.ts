import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }

  send(form:any): Observable<boolean> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(form);
    return this.http.post<boolean>(
      `${environment.apiUrl}/transfer`,
      form, {headers: headers}
    )
  }
}

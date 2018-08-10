import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Response {
  name: string;
  value: string;
};
interface Send {
  value: number;
}

@Injectable({
  providedIn: 'root',
})

export class CalculateService {

  url = "http://localhost:3000/RESTTest";

  constructor(private http: HttpClient) { }
  getEvenOdd(num: number): string {
    if(num % 2 == 0)
      return 'Even';
    else
      return 'Odd';
  }

  getResponseFromServer(payload: Send): Observable<Response> {
    return this.http.post<Response>(this.url, payload);
  }
}

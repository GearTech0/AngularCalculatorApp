import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Response {
    name: string;
    value: string;
};
interface Send {
    value: number;
}

@Injectable()

export class CalculateServiceMock {
    getEvenOdd(num: number): string {
        if(num % 2 == 0)
            return 'Even';
        else
            return 'Odd';
    }

    getResponseFromServer(payload: Send): Observable<Response> {
        var num = payload.value;

        if(num % 2 == 0)
            return of({ name: 'Response', value: 'Even' });
        else
            return of({ name: 'Response', value: 'Odd' });
    }
}
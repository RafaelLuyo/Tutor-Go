import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentIntentDto } from '../model/payment-intent-dto';

const header = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  stripeURL = ' http://localhost:8080/api/v1/stripe/';

  constructor(private httpClient: HttpClient) {}

    public buy(paymentIntentDto: PaymentIntentDto): Observable<PaymentResponse> {
        return this.httpClient.post<PaymentResponse>(this.stripeURL + 'paymentintent', paymentIntentDto, header);
    }

    public confirm(id: string): Observable<string> {
        return this.httpClient.post<string>(this.stripeURL + `confirm/${id}`, {}, header);
    }

    public cancel(id: string): Observable<string> {
        return this.httpClient.post<string>(this.stripeURL + `cancel/${id}`, {}, header);
    }


}

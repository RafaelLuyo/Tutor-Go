import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { ModalComponent } from '../../components/modal/modal.component';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';
import { PaymentIntentDto } from '../../model/payment-intent-dto';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  @Input() name:string = '';
  @Input() price: number = 0;
  @Input() description:string = '';
  @Input() id: number = 0;
  error: any;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  public stripeForm: FormGroup;

  constructor(
      private dialogRef: MatDialog,
      private stripeService: StripeService,
      private paymentService: PaymentService,
      private router: Router,
      private fb: FormBuilder
  ) {
    this.stripeForm = this.fb.group({
      name: ['', Validators.required],

    });
  }

  ngOnInit(): void {}

    buy(): void {
        const nameControl = this.stripeForm.get('name');

        if (nameControl) {
            const name = nameControl.value;
            this.stripeService.createToken(this.card.element, { name }).subscribe(
                (result) => {
                    if (result.token) {
                        const paymentIntentDto: PaymentIntentDto = {
                            token: result.token.id,
                            amount: this.price,
                            currency: 'pen',
                            description: this.description
                        };

                        this.paymentService.buy(paymentIntentDto).subscribe(
                            (data: any) => {
                                if (data && data.id) {
                                    const paymentIntentId = data.id;
                                    this.openModal(paymentIntentId, this.name, paymentIntentDto.description, paymentIntentDto.amount, this.id);
                                } else {
                                    console.error('Error: La respuesta del backend no tiene la propiedad "id".', data);
                                }
                            },
                            (error) => {
                                console.error('Error al procesar el pago:', error);
                            }
                        );

                        this.error = undefined;
                    } else if (result.error) {
                        console.log(result.error.message);
                    }
                },
                (error) => {
                    console.error('Error al crear el token:', error);
                }
            );
        } else {
            console.error('Name control is null');
        }
    }

  openModal(id: string, name: string, description: string, price: number, idStudent : number): void {
    const modalRef = this.dialogRef.open(ModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.description = description;
    modalRef.componentInstance.price = price;
    modalRef.componentInstance.idStudent = idStudent;
    console.log(modalRef.componentInstance);
  }
}

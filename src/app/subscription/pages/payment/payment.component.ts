import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

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


  @Input() name:string = '';
  @Input() price: number = 0;
  @Input() description:string = '';
  @Input() id: number = 0;
  error: any;





  public stripeForm: FormGroup;

  constructor(
      private dialogRef: MatDialog,

      private paymentService: PaymentService,
      private router: Router,
      private fb: FormBuilder
  ) {
    this.stripeForm = this.fb.group({
      name: ['', Validators.required],

    });
  }

  ngOnInit(): void {}


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

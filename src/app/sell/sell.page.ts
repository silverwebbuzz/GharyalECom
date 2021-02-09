import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../_helper/must-match.validator';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {

  sell_form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.sell_fb();
   }

  ngOnInit() {
  }

  sell_fb() {
    this.sell_form = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      phone: [null, Validators.required],
      brand: [null, Validators.required],
      reference: [null, Validators.required],
      amount: [null, Validators.required],
      document: [null, Validators.required],
      comment: [null, Validators.required],
      myfile: [null, Validators.required]
    });
  };

  onFormSubmit() {
    for (let v in this.sell_form.controls) {
      this.sell_form.controls[v].markAsTouched();
    }
    if (this.sell_form.valid) {
      // let body = {
      //   "firstname": this.sell_form.value.firstname,
      //   "lastname": this.sell_form.value.lastname,
      //   "email": this.sell_form.value.email,
      //   "phone": this.sell_form.value.phone,
      //   "brand": this.sell_form.value.brand,
      //   "reference": this.sell_form.value.reference,
      //   "amount": this.sell_form.value.amount,
      //   "document": this.sell_form.value.document,
      //   "comment": this.sell_form.value.comment,
      // };
    }
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipping',
  templateUrl: './tipping.component.html',
  styleUrls: ['./tipping.component.css']
})
export class TippingComponent implements OnInit {

  tipPercentage = 0.2;
  billAmount = 0;
  tipAmount = 0;
  total = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setTipPercentage(amount: number) {
    this.tipPercentage = amount;
    this.calculate(this.billAmount);
  }

  calculate(amount: number) {
    this.billAmount = amount;
    this.tipAmount = this.billAmount * this.tipPercentage;
    this.total = this.billAmount + this.tipAmount;
  }

}

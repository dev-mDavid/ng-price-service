import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-service-demo',
  templateUrl: './price-service-demo.component.html',
  styleUrls: ['./price-service-demo.component.sass']
})
export class PriceService implements OnInit {

  constructor() { }

  calculateTotalPrice(
    basePrice: number,
    state: string
  ) {
    const tax = Math.random();

    return basePrice + tax;
  }

  ngOnInit() {
  }

}

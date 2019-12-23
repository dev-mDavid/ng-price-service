import { Component, OnInit } from '@angular/core';
import { PriceService } from '../../app/price-service-demo/price-service-demo.component';

@Component({
  selector: 'app-product-model',
  templateUrl: './product-model.component.html',
  styleUrls: ['./product-model.component.sass']
})

export class Product {
  service: PriceService;
  basPrice: number;

  constructor(
    basePrice: number
  ) { 
    this.service = new PriceService();
    this.basePrice = basePrice;
  }

  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }

  ngOnInit() {
  }

}

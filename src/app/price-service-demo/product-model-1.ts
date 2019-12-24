import {PriceService} from './price-service-1';

export class Product {
  service: PriceService;
  basePrice: number;

  constructor() {
    this.service = new PriceService();
    this.basePrice = 27;
  }

  totalPrice(
    state: string
  ) {
    console.log("ProductModel Works" 
    + this.service.calculateTotalPrice(this.basePrice, state));
  }
  
}

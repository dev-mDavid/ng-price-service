import { Component } from '@angular/core';
// import { PriceService } from './price-service-demo/price-service-1';
// import { Product } from './price-service-demo/product-model-1';
import { MockPriceService } from './price-service-demo/price-service-mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'ng-price-service';

  
}
console.log(
  MockPriceService.prototype.calculateTotalPrice(2, 'FL')
);
// PriceService.prototype.calculateTotalPrice(27,'florida');
// Product.prototype.totalPrice('florida')


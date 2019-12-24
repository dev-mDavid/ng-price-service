export class PriceService {
  
  calculateTotalPrice(
    basePrice: number,
    // state: string
  ){
    const tax = Math.random();

    console.log(basePrice + tax);
  }
  
  
}
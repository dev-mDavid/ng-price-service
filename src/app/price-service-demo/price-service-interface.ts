export interface PriceServiceInterface {
  calculateTotalPrice(basePrice: number, state: string): number;
}

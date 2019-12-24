import { MockPriceService } from './price-service-mock';

describe('MockPriceService', () => {
  it('should create an instance', () => {
    expect(new MockPriceService()).toBeTruthy();
  });
});

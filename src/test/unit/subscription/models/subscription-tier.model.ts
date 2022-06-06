export default class SubscriptionTier {
  constructor(minRange: number, maxRange: number | null, price: number) {}

  get minRange(): number {
    return this.minRange;
  }

  get maxRange(): number {
    return this.maxRange;
  }

  get price(): number {
    return this.price;
  }
}

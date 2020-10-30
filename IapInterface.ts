export class InAppPurchase {
  constructor(
    public localizedTitle?: string,
    public priceFormatted?: string,
    public productIdentifier?: string,
    public bgImage?: string,
    public storyStartRoute?: string,
    public firstItem?: boolean,
    public lastItem?: boolean
  ) {}
}

import { Page } from "@playwright/test";

export class CurrencyPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async changeCurrency(currency: string) {
    await this.page.selectOption("#customerCurrency", currency);
  }

  async getProductPriceText() {
    return this.page.textContent(".price");
  }
}

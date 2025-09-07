import { Page, Locator, expect } from "@playwright/test";

export class CurrencyPage {
  readonly page: Page;
  readonly currencyDropdown: Locator;
  readonly firstProductPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    // currency dropdown
    this.currencyDropdown = page.locator("#customerCurrency");
    // first product price
    this.firstProductPrice = page.locator(".prices").first();
  }

  // open homepage
  async openHomePage() {
    await this.page.goto("https://demo.nopcommerce.com/");
  }

  // select currency
  async changeCurrency(currency: string) {
    await expect(this.currencyDropdown).toBeVisible();
    await this.currencyDropdown.selectOption({ label: currency });
  }

  // verify price symbol
  async verifyPriceContains(symbol: string) {
    await expect(this.firstProductPrice).toContainText(symbol);
  }
}

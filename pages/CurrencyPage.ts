import { Page, Locator, expect } from "@playwright/test";

export class CurrencyPage {
  readonly page: Page;
  readonly currencyDropdown: Locator;
  readonly firstProductPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.currencyDropdown = page.locator("#customerCurrency");
    this.firstProductPrice = page.locator(".prices").first();
  }

  async openHomePage() {
    await this.page.goto("https://demo.nopcommerce.com/");
  }

  async changeCurrency(currency: string) {
    await expect(this.currencyDropdown).toBeVisible();
    await this.currencyDropdown.selectOption({ label: currency });
  }

  async verifyPriceContains(symbol: string) {
    await expect(this.firstProductPrice).toContainText(symbol);
  }
}

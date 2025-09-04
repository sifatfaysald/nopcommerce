import { Page } from "@playwright/test";

export class SearchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchProduct(productName: string) {
    await this.page.fill('input[name="q"]', productName);
    await this.page.click('button[type="submit"]');
  }

  async getSearchResultText() {
    return this.page.textContent(".no-result");
  }
}

import { Page, Locator, expect } from "@playwright/test";

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly mainContent: Locator;
  readonly productsPerPageDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    // search input field
    this.searchInput = page.getByRole("textbox", { name: "Search store" });
    // search button
    this.searchButton = page.getByRole("button", { name: "Search" });
    // main content area
    this.mainContent = page.locator("#main");
    // products per page dropdown
    this.productsPerPageDropdown = page.getByLabel(
      "Select number of products per"
    );
  }

  // search for a product
  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  // verify search results displayed
  async verifySearchResults() {
    await expect(this.mainContent).toContainText("Display");
    await expect(this.productsPerPageDropdown).toBeVisible();
  }

  // log all products found
  async logAllProducts() {
    const products = this.page.locator(".product-title a");
    const count = await products.count();
    console.log(`Total products found: ${count}`);

    for (let i = 0; i < count; i++) {
      const productName = await products.nth(i).textContent();
      console.log(`${i + 1}. ${productName?.trim()}`);
    }
  }
}

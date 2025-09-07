import { Page, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // open electronics category
  async goToElectronics() {
    await this.page
      .getByRole("link", { name: "Picture for category Electronics" })
      .click();
  }

  // open cell category
  async goToCellCategory() {
    await this.page
      .getByRole("link", { name: "Picture for category Cell" })
      .click();
  }

  // add first product
  async addFirstProductToCart() {
    await this.page
      .getByRole("button", { name: "Add to cart" })
      .first()
      .click();
  }

  // go to cart page
  async goToCart() {
    await this.page
      .getByRole("link", { name: "Shopping cart (2)", exact: true })
      .click();
  }

  // check cart page loaded
  async verifyCartPage() {
    await expect(this.page.getByRole("heading")).toContainText("Shopping cart");
  }
}

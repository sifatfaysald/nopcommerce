import { Page, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToElectronics() {
    await this.page
      .getByRole("link", { name: "Picture for category Electronics" })
      .click();
  }

  async goToCellCategory() {
    await this.page
      .getByRole("link", { name: "Picture for category Cell" })
      .click();
  }

  async addFirstProductToCart() {
    await this.page
      .getByRole("button", { name: "Add to cart" })
      .first()
      .click();
  }

  async goToCart() {
    await this.page
      .getByRole("link", { name: "Shopping cart (2)", exact: true })
      .click();
  }

  async verifyCartPage() {
    await expect(this.page.getByRole("heading")).toContainText("Shopping cart");
  }
}

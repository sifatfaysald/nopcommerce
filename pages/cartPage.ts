import { Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart(productName: string) {
    await this.page.click(`text=${productName}`);
    await this.page.click("button#add-to-cart-button-1"); // adjust selector per product
  }

  async getCartCount() {
    return this.page.textContent("span.cart-qty");
  }
}

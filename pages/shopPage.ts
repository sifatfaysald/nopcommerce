import { Page, Locator, expect } from "@playwright/test";

export class ShopPage {
  readonly page: Page;
  readonly addToCartButtons: Locator;
  readonly cartLink: Locator;
  readonly termsCheckbox: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButtons = page.getByRole("button", { name: "Add to cart" });
    this.cartLink = page.getByRole("link", { name: /Shopping cart/i }).first();
    this.termsCheckbox = page.getByRole("checkbox", {
      name: /I agree with the terms/i,
    });
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async addProductToCart(index: number = 0) {
    await this.addToCartButtons.nth(index).click();
    await expect(this.page.locator("#topcartlink")).toContainText(
      "Shopping cart"
    );
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async proceedToCheckout() {
    await this.termsCheckbox.check();
    await this.checkoutButton.click();
  }
}

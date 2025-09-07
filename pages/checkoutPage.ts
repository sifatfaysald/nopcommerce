import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly sizeSelect: Locator;
  readonly gbRadio: Locator;
  readonly addToCartBtn: Locator;
  readonly cartLink: Locator;
  readonly checkoutBtn: Locator;
  readonly closeModalBtn: Locator;
  readonly termsCheckbox: Locator;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sizeSelect = page.locator("#product_attribute_2");
    this.gbRadio = page.getByRole("radio", { name: "GB [+$100.00]" });
    this.addToCartBtn = page.locator("#add-to-cart-button-1");
    this.cartLink = page.locator("#topcartlink");
    this.checkoutBtn = page.getByRole("button", { name: "Checkout" });
    this.closeModalBtn = page.getByRole("button", { name: "Close" });
    this.termsCheckbox = page.getByRole("checkbox", {
      name: /I agree with the terms/,
    });
    this.header = page.locator("h1");
  }

  async selectProductOptions() {
    await expect(this.sizeSelect).toBeVisible();
    await this.sizeSelect.selectOption("5");

    await expect(this.gbRadio).toBeVisible();
    await this.gbRadio.check();
  }

  async addToCart() {
    await expect(this.addToCartBtn).toBeVisible({ timeout: 10000 });
    await this.addToCartBtn.click();
    await this.page.waitForTimeout(2000); // wait for cart update
  }

  async openCart() {
    await expect(this.cartLink).toBeVisible();
    await this.cartLink.click();
  }
}

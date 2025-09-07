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
    // size dropdown
    this.sizeSelect = page.locator("#product_attribute_2");
    // GB radio option
    this.gbRadio = page.getByRole("radio", { name: "GB [+$100.00]" });
    // add to cart button
    this.addToCartBtn = page.locator("#add-to-cart-button-1");
    // top cart link
    this.cartLink = page.locator("#topcartlink");
    // checkout button
    this.checkoutBtn = page.getByRole("button", { name: "Checkout" });
    // close modal button
    this.closeModalBtn = page.getByRole("button", { name: "Close" });
    // terms checkbox
    this.termsCheckbox = page.getByRole("checkbox", {
      name: /I agree with the terms/,
    });
    // page header
    this.header = page.locator("h1");
  }

  // select product options
  async selectProductOptions() {
    await expect(this.sizeSelect).toBeVisible();
    await this.sizeSelect.selectOption("5");

    await expect(this.gbRadio).toBeVisible();
    await this.gbRadio.check();
  }

  // add product to cart
  async addToCart() {
    await expect(this.addToCartBtn).toBeVisible({ timeout: 10000 });
    await this.addToCartBtn.click();
    await this.page.waitForTimeout(2000); // wait for cart update
  }

  // open cart
  async openCart() {
    await expect(this.cartLink).toBeVisible();
    await this.cartLink.click();
  }
}

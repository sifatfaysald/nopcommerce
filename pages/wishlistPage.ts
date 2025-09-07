import { Page, Locator, expect } from "@playwright/test";

export class WishlistPage {
  readonly page: Page;
  readonly addToWishlistBtn: Locator;
  readonly notificationLink: Locator;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToWishlistBtn = page.locator("#add-to-wishlist-button-1");
    this.notificationLink = page.locator(".bar-notification a", {
      hasText: "wishlist",
    });
    this.header = page.locator("h1");
  }

  async addProductToWishlist() {
    await expect(this.addToWishlistBtn).toBeVisible();
    await this.addToWishlistBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async openWishlist() {
    await this.page.goto("https://demo.nopcommerce.com/wishlist");
  }

  async verifyWishlistPage() {
    await expect(this.header).toHaveText(/Wishlist/);
  }
}

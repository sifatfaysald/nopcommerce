import { Page, Locator, expect } from "@playwright/test";

export class WishlistPage {
  readonly page: Page;
  readonly addToWishlistBtn: Locator;
  readonly notificationLink: Locator;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    // add to wishlist button
    this.addToWishlistBtn = page.locator("#add-to-wishlist-button-1");
    // notification link after adding
    this.notificationLink = page.locator(".bar-notification a", {
      hasText: "wishlist",
    });
    // page header
    this.header = page.locator("h1");
  }

  // click add to wishlist
  async addProductToWishlist() {
    await expect(this.addToWishlistBtn).toBeVisible();
    await this.addToWishlistBtn.click();
    await this.page.waitForTimeout(2000);
  }

  // navigate to wishlist page
  async openWishlist() {
    await this.page.goto("https://demo.nopcommerce.com/wishlist");
  }

  // verify wishlist page loaded
  async verifyWishlistPage() {
    await expect(this.header).toHaveText(/Wishlist/);
  }
}

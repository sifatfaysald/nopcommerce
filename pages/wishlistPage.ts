import { Page } from "@playwright/test";

export class WishlistPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToWishlist(productName: string) {
    await this.page.click(`text=${productName}`);
    await this.page.click("button.add-to-wishlist-button");
  }

  async getWishlistCount() {
    return this.page.textContent("span.wishlist-qty");
  }
}

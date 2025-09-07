import { test, expect } from "@playwright/test";
import { WishlistPage } from "../pages/wishlistPage";

test.skip("nopcommerce wishlist flow", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  const firstProduct = page.locator(".product-item").first();
  await expect(firstProduct).toBeVisible();
  await firstProduct.click();
  const wishlist = new WishlistPage(page);
  await wishlist.addProductToWishlist();
  await wishlist.openWishlist();
  await wishlist.verifyWishlistPage();
});

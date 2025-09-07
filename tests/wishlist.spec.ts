import { test, expect } from "@playwright/test";
import { WishlistPage } from "../pages/wishlistPage";

// test nopcommerce wishlist flow
test.skip("nopcommerce wishlist flow", async ({ page }) => {
  // open homepage
  await page.goto("https://demo.nopcommerce.com/");
  // select first product
  const firstProduct = page.locator(".product-item").first();
  await expect(firstProduct).toBeVisible();
  await firstProduct.click();
  // initialize wishlist page
  const wishlist = new WishlistPage(page);
  // add product to wishlist
  await wishlist.addProductToWishlist();
  // open wishlist page
  await wishlist.openWishlist();
  // verify wishlist page displayed
  await wishlist.verifyWishlistPage();
});

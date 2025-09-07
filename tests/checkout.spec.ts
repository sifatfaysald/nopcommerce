import { test, expect } from "@playwright/test";
import { CheckoutPage } from "../pages/CheckoutPage";

// test nopcommerce checkout flow
test.skip("nopcommerce checkout flow", async ({ page }) => {
  // open homepage
  await page.goto("https://demo.nopcommerce.com/");
  // select first product
  const firstProduct = page.locator(".product-item").first();
  await expect(firstProduct).toBeVisible();
  await firstProduct.click();
  // initialize checkout page
  const checkout = new CheckoutPage(page);
  // select product options
  await checkout.selectProductOptions();
  // add product to cart
  await checkout.addToCart();
  // open cart
  await checkout.openCart();
  // wait for cart update
  await page.waitForTimeout(4000);
});

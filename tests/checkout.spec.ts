import { test, expect } from "@playwright/test";
import { CheckoutPage } from "../pages/CheckoutPage";

test("nopcommerce checkout flow", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  const firstProduct = page.locator(".product-item").first();
  await expect(firstProduct).toBeVisible();
  await firstProduct.click();
  const checkout = new CheckoutPage(page);
  await checkout.selectProductOptions();
  await checkout.addToCart();
  await checkout.openCart();
  await page.waitForTimeout(4000);
});

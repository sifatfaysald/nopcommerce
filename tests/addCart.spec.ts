import { test } from "@playwright/test";
import { CartPage } from "../pages/CartPage";

test("add Electronics → Cell product to cart without login step", async ({
  page,
}) => {
  const cartPage = new CartPage(page);
  await page.goto("https://demo.nopcommerce.com/");
  await cartPage.goToElectronics();
  await cartPage.goToCellCategory();
  await cartPage.addFirstProductToCart();
  await cartPage.goToCart();
  await cartPage.verifyCartPage();

  console.log("Electronics → Cell product successfully added to cart ✅");
});

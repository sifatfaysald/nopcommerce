import { test } from "@playwright/test";
import { CartPage } from "../pages/CartPage";

test.skip("add Electronics → Cell product to cart", async ({
  page,
}) => {
  const cartPage = new CartPage(page);
  // open homepage
  await page.goto("https://demo.nopcommerce.com/");
  // navigate to Electronics category
  await cartPage.goToElectronics();
  // navigate to Cell subcategory
  await cartPage.goToCellCategory();
  // add first product to cart
  await cartPage.addFirstProductToCart();
  // open cart page
  await cartPage.goToCart();
  // verify cart page displayed
  await cartPage.verifyCartPage();

  console.log("Electronics → Cell product successfully added to cart");
});

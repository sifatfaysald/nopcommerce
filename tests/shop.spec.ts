import { test } from "@playwright/test";
import { ShopPage } from "../pages/shopPage";
import path from "path";

const AUTH_JSON = path.resolve(__dirname, "../auth.json");

test("Shop workflow with global session", async ({ browser }) => {
  const context = await browser.newContext({
    storageState: AUTH_JSON, // reuse saved login session
  });

  const page = await context.newPage();
  const shop = new ShopPage(page);

  await shop.goto();
  await shop.addProductToCart(1); // add second product
  await shop.goToCart();
  await shop.proceedToCheckout();
});

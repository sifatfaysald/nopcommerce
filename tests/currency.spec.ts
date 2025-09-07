import { test } from "@playwright/test";
import { CurrencyPage } from "../pages/CurrencyPage";

test.skip("currency change flow", async ({ page }) => {
  const currency = new CurrencyPage(page);
  await currency.openHomePage();
  await currency.changeCurrency("Euro");
  await currency.verifyPriceContains("€");
});

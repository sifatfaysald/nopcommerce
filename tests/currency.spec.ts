import { test } from "@playwright/test";
import { CurrencyPage } from "../pages/CurrencyPage";

// test currency change flow
test.skip("currency change flow", async ({ page }) => {
  const currency = new CurrencyPage(page);
  // open homepage
  await currency.openHomePage();
  // change currency to Euro
  await currency.changeCurrency("Euro");
  // verify price displays Euro symbol
  await currency.verifyPriceContains("€");
});

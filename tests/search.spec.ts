import { test } from "@playwright/test";
import { SearchPage } from "../pages/SearchPage";

test.skip("search for product Apple", async ({ page }) => {
  const searchPage = new SearchPage(page);

  await page.goto("https://demo.nopcommerce.com/login");
  await searchPage.searchProduct("Apple");
  await searchPage.verifySearchResults();

  await searchPage.logAllProducts();

  console.log("Search test success");
});

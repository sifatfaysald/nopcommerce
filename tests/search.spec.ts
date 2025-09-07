import { test } from "@playwright/test";
import { SearchPage } from "../pages/SearchPage";

// test searching for product "Apple"
test.skip("search for product Apple", async ({ page }) => {
  const searchPage = new SearchPage(page);
  // navigate to login/home page
  await page.goto("https://demo.nopcommerce.com/login");
  // perform product search
  await searchPage.searchProduct("Apple");
  // verify search results displayed
  await searchPage.verifySearchResults();
  // log all products found
  await searchPage.logAllProducts();

  console.log("Search test success");
});

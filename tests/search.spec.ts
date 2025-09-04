import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/searchPage";
import { searchProducts } from "../utils/testData";

test.describe("Search Feature", () => {
  searchProducts.forEach((product) => {
    test(`Search scenario: ${product.type}`, async ({ page }) => {
      const searchPage = new SearchPage(page);
      await page.goto("/");
      await searchPage.searchProduct(product.name);

      if (product.type === "valid") {
        const noResult = await searchPage.getSearchResultText();
        expect(noResult).toBeNull();
      } else {
        const noResult = await searchPage.getSearchResultText();
        expect(noResult).toContain("No products were found");
      }
    });
  });
});

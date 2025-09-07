import { test, expect } from "@playwright/test";

// test accessing customer info page
test.skip("access customer info page", async ({ page }) => {
  // navigate to customer info page
  await page.goto("https://demo.nopcommerce.com/customer/info", {
    waitUntil: "domcontentloaded",
  });
  // verify URL
  await expect(page).toHaveURL(/.*customer\/info/);
  // verify page header
  await expect(page.locator("h1")).toHaveText("My account - Customer info");
  // log page title
  const title = await page.title();
  console.log("Page title:", title);
});

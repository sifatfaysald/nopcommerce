import { test, expect } from "@playwright/test";

test("access customer info page", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/customer/info", {
    waitUntil: "domcontentloaded",
  });
  await expect(page).toHaveURL(/.*customer\/info/);
  await expect(page.locator("h1")).toHaveText("My account - Customer info");
  const title = await page.title();
  console.log("Page title:", title);
});

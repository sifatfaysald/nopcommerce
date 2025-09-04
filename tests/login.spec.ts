import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { loginUsers } from "../utils/testData";

test.describe("Login Feature", () => {
  loginUsers.forEach((user) => {
    test(`Login scenario: ${user.type}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(user.email, user.password);

      if (user.type === "valid") {
        await expect(page.locator("text=Log out")).toBeVisible();
      } else {
        const errorMsg = await loginPage.getErrorMessage();
        await expect(errorMsg).toContain("unsuccessful");
      }
    });
  });
});

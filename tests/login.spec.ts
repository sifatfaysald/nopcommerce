import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.skip("login and save auth", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("noname@qa.com", "Nopass123");
  await loginPage.verifyLoginSuccess();
  await loginPage.saveAuthState("storage/auth.json");
});

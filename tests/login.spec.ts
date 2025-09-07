import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.skip("login and save auth", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Open login page
  await loginPage.goto();

  // Perform login
  await loginPage.login("noname@qa.com", "Nopass123");

  // Verify login success
  await loginPage.verifyLoginSuccess();

  // Save authentication state
  await loginPage.saveAuthState("storage/auth.json");
});

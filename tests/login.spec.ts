import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

// test login and save authentication state
test.skip("login and save auth", async ({ page }) => {
  const loginPage = new LoginPage(page);
  // navigate to login page
  await loginPage.goto();
  // perform login
  await loginPage.login("noname@qa.com", "Nopass123");
  // verify login successful
  await loginPage.verifyLoginSuccess();
  // save authentication state
  await loginPage.saveAuthState("storage/auth.json");
});

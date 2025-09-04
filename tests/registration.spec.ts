import { test } from "@playwright/test";
import { RegistrationPage } from "../pages/registrationPage";

test("User registration", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  await registrationPage.goto();

  await registrationPage.fillRegistrationForm(
    "User",
    "Dev",
    `user${Date.now()}@gmail.com`,
    "NoCompany",
    "Nopass123"
  );

  await registrationPage.expectRegistrationSuccess();
});

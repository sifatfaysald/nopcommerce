import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pages/registrationPage";

test.skip("user can register successfully", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  await registrationPage.goto();

  // generate random email for each test run
  const randomEmail = `user${Date.now()}@qa.com`;

  await registrationPage.register("John", "Doe", randomEmail, "Password123!");

  // Success message verify
  const successMessage = await registrationPage.getSuccessMessage();
  expect(successMessage).toContain("Your registration completed");

  console.log("Registered successfully with email:", randomEmail);
});

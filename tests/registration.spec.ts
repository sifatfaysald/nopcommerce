import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pages/registrationPage";

// test user registration flow
test.skip("user can register successfully", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  // navigate to registration page
  await registrationPage.goto();
  // generate random email
  const randomEmail = `user${Date.now()}@qa.com`;
  // fill and submit registration form
  await registrationPage.register("John", "Doe", randomEmail, "Password123!");
  // get and verify success message
  const successMessage = await registrationPage.getSuccessMessage();
  expect(successMessage).toContain("Your registration completed");

  console.log("Registered successfully with email:", randomEmail);
});

import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pages/registrationPage";
import { registrationUsers } from "../utils/testData";

test.describe("User Registration", () => {
  registrationUsers.forEach((user) => {
    test(`Registration test for ${user.email}`, async ({ page }) => {
      const regPage = new RegistrationPage(page);
      await regPage.goto();
      await regPage.register(
        user.firstName,
        user.lastName,
        user.email,
        user.password
      );

      if (user.email.includes("existing")) {
        const msg = await regPage.getSuccessMessage();
        await expect(msg).toContain("already exists");
      } else {
        const msg = await regPage.getSuccessMessage();
        await expect(msg).toContain("Your registration completed");
      }
    });
  });
});

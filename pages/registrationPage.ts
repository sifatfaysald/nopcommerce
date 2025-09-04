import { Page, Locator, expect } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly genderMale: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly companyInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.genderMale = page.getByRole("radio", { name: "Male", exact: true });
    this.firstNameInput = page.getByRole("textbox", { name: "First name:" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last name:" });
    this.emailInput = page.getByRole("textbox", { name: "Email:" });
    this.companyInput = page.getByRole("textbox", { name: "Company name:" });
    this.passwordInput = page.getByRole("textbox", {
      name: "Password:",
      exact: true,
    });
    this.confirmPasswordInput = page.getByRole("textbox", {
      name: "Confirm password:",
    });
    this.registerButton = page.getByRole("button", { name: "Register" });
    this.successMessage = page.locator("#main");
  }

  async goto() {
    await this.page.goto("https://demo.nopcommerce.com/register");
  }

  async fillRegistrationForm(
    firstName: string,
    lastName: string,
    email: string,
    company: string,
    password: string
  ) {
    await this.genderMale.check();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.companyInput.fill(company);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.registerButton.click();
  }

  async expectRegistrationSuccess() {
    await expect(this.page.getByRole("heading")).toContainText("Register");
    await expect(this.successMessage).toContainText(
      "Your registration completed"
    );
  }
}

import { Page } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // navigate to registration page
  async goto() {
    await this.page.goto("/register");
  }

  // fill and submit registration form
  async register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    await this.page.fill("#FirstName", firstName);
    await this.page.fill("#LastName", lastName);
    await this.page.fill("#Email", email);
    await this.page.fill("#Password", password);
    await this.page.fill("#ConfirmPassword", password);
    await this.page.click("#register-button");
  }

  // get registration success message
  async getSuccessMessage() {
    return this.page.textContent(".result");
  }
}

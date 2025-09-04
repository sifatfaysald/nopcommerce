import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.page.fill("#Email", email);
    await this.page.fill("#Password", password);
    await this.page.click("button.login-button");
  }

  async getErrorMessage() {
    return this.page.textContent(".message-error");
  }
}

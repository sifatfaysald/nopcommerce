import { Page, Locator, expect } from "@playwright/test";
import path from "path";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly loginButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole("textbox", { name: "Email:" });
    this.passwordInput = page.getByRole("textbox", { name: "Password:" });
    this.rememberMeCheckbox = page.getByRole("checkbox", {
      name: "Remember me?",
    });
    this.loginButton = page.getByRole("button", { name: "Log in" });
    this.logoutLink = page.getByRole("link", { name: "Log out" });
  }

  async goto() {
    await this.page.goto("https://demo.nopcommerce.com/login");
  }

  async login(email: string, password: string, rememberMe: boolean = true) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    if (rememberMe) {
      await this.rememberMeCheckbox.check();
    }
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.logoutLink).toBeVisible();
  }

  async saveAuthState(filePath: string = "storage/auth.json") {
    const fullPath = path.resolve(filePath);
    await this.page.context().storageState({ path: fullPath });
  }
}

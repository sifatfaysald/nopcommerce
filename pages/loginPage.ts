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
    // email input field
    this.emailInput = page.getByRole("textbox", { name: "Email:" });
    // password input field
    this.passwordInput = page.getByRole("textbox", { name: "Password:" });
    // remember me checkbox
    this.rememberMeCheckbox = page.getByRole("checkbox", {
      name: "Remember me?",
    });
    // login button
    this.loginButton = page.getByRole("button", { name: "Log in" });
    // logout link
    this.logoutLink = page.getByRole("link", { name: "Log out" });
  }

  // navigate to login page
  async goto() {
    await this.page.goto("https://demo.nopcommerce.com/login");
  }

  // perform login
  async login(email: string, password: string, rememberMe: boolean = true) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    if (rememberMe) {
      await this.rememberMeCheckbox.check();
    }
    await this.loginButton.click();
  }

  // check if login was successful
  async verifyLoginSuccess() {
    await expect(this.logoutLink).toBeVisible();
  }

  // save auth state to file
  async saveAuthState(filePath: string = "storage/auth.json") {
    const fullPath = path.resolve(filePath);
    await this.page.context().storageState({ path: fullPath });
  }
}

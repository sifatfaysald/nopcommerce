import { Page } from "@playwright/test";

export class NewsletterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async subscribe(email: string) {
    await this.page.fill("#NewsletterEmail", email);
    await this.page.click("button.subscribe-button");
  }

  async getSubscriptionMessage() {
    return this.page.textContent(".result");
  }
}

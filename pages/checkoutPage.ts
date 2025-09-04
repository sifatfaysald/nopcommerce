import { Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/checkout");
  }

  async fillBillingDetails(firstName: string, lastName: string, email: string) {
    await this.page.fill("#BillingNewAddress_FirstName", firstName);
    await this.page.fill("#BillingNewAddress_LastName", lastName);
    await this.page.fill("#BillingNewAddress_Email", email);
  }

  async confirmOrder() {
    await this.page.click("button.confirm-order-next-step-button");
  }

  async getOrderConfirmation() {
    return this.page.textContent(".section.order-completed");
  }
}

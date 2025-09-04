import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [["html"], ["allure-playwright"]],
  use: {
    baseURL: "https://demo.nopcommerce.com/",
    headless: false,
    screenshot: "only-on-failure",
    video: "on",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});

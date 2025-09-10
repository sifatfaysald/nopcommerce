# NopCommerce Automation Project

This project contains automation scripts for the [nopCommerce demo site](https://demo.nopcommerce.com/) using **Playwright** and **TypeScript**. The scripts follow **Page Object Model (POM)** and include **data-driven testing**, screenshots/logs on failure, and Allure reporting.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features Automated](#features-automated)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Reporting](#reporting)
- [Video Capture](#video-capture)
- [Notes](#notes)

---

## Project Overview
The goal of this project is to automate critical workflows of the nopCommerce demo site, including:

- User Registration
- Login
- Search
- Add to Cart
- Checkout
- Wishlist
- Currency Change
- Newsletter Subscription

Automation ensures consistent QA coverage, faster feedback, and reduced manual regression effort. Each feature includes **Pass**, **Fail**, and **Edge case scenarios**.

---

## Features Automated
| Feature | Description |
|---------|-------------|
| User Registration | Automates signup with valid, invalid, and edge case inputs. |
| Login | Tests valid login, invalid credentials, and boundary inputs. |
| Search | Valid product search, no-result search, and edge cases (long string, special characters). |
| Add to Cart | Adds/removes products, handles out-of-stock, and duplicate addition edge cases. |
| Checkout | Valid checkout flow, invalid payment, and missing shipping info. |
| Wishlist | Add/remove products, duplicate product handling, login required check. |
| Currency Change | Change currency on homepage and cart, validate price updates. |
| Newsletter Subscription | Valid email, invalid email, duplicate subscription handling. |


# Install & Setup

### 1. Install npm

```bash
npm install
```
### Install Playwright

```
npm init playwright@latest
npx playwright install
npm install @playwright/test
npm install -D @playwright/test@latest
```

### Running Test

### Run All test

```bash
npx playwright test
```

### Run HTML report

```bash
npx playwright show-report
```


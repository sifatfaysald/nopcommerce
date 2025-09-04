export const loginUsers = [
  { email: "testuser@mrotzis.com", password: "Nopass123", type: "valid" },
  { email: "invalid@test.com", password: "wrongpass", type: "invalid" },
  { email: "", password: "", type: "empty" },
];

export const registrationUsers = [
  {
    firstName: "John",
    lastName: "Doe",
    email: `john${Date.now()}@test.com`,
    password: "Test@123",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "existing@test.com",
    password: "Test@123",
  },
];

export const searchProducts = [
  { name: "Apple", type: "valid" },
  { name: "NonExistentProduct", type: "invalid" },
  { name: "@#$%^&*", type: "edge" },
];

export const cartProducts = [
  { name: "Apple MacBook Pro", inStock: true },
  { name: "Out of Stock Product", inStock: false },
];

export const newsletterEmails = [
  { email: "validemail@test.com", type: "valid" },
  { email: "invalidemail", type: "invalid" },
  { email: "existing@test.com", type: "edge" },
];

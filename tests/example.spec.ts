import { test, expect } from "@chromaui/test-archiver";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});

test("should render the /login page", async ({ page }) => {
  const title = await page.locator('form button[type="submit"]').innerText();
  await expect(title).toBe("Log in");
});

test(`should not allow login with the wrong credentials`, async ({ page }) => {
  await page.fill('input[name="email"]', "username@email.com");
  await page.fill('input[name="password"]', "wrongpasswordfor@email.com");
  return page.locator('form button[type="submit"]').click();
  expect(await page.locator("#email-error").innerText()).toEqual(
    `Invalid email or password`,
  );
});

test(`should allow login with the right credentials`, async ({ page }) => {
  await page.fill('input[name="email"]', process.env.PW_USER_EMAIL || "");
  await page.fill('input[name="password"]', process.env.PW_USER_PASS || "");
  await page.locator('form button[type="submit"]').click();
  await page.waitForLoadState("networkidle");
  expect(page.url().substr(page.url().lastIndexOf("/"))).toEqual("/login");
  await page.context().storageState({ path: "tests/state.json" });
});

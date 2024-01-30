import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("screenshot homepage", async ({ page }) => {
  await page.goto("https://www.chromatic.com/start");
  await argosScreenshot(page, "homepage");
});

test("screenshot homepage mobile", async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844,
  });
  await page.goto("https://www.chromatic.com/start");
  await argosScreenshot(page, "homepage");
});

test("screenshot google", async ({ page }) => {
  await page.goto("https://www.google.com");
  await argosScreenshot(page, "homepage");
});

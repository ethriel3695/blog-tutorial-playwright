import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("screenshot homepage", async ({ page }) => {
  await page.goto("https://www.chromatic.com/start");
  await argosScreenshot(page, "homepage");
});

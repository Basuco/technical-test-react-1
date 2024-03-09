import { test, expect } from '@playwright/test';
const LOCALHOST_URL = 'http://localhost:5173/';
const API_PREFIX = 'https://cataas.com';
test('app show a random fact and an image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // await page.textContent('.fact')
  const factText = await page.getByRole('paragraph');
  const catImage = await page.getByRole('img');

  const textContent = await factText.textContent();
  const imageSrc = await catImage.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(API_PREFIX)).toBeTruthy();
  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});
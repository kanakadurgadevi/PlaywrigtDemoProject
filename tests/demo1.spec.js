const { test, expect } = require('@playwright/test');
test("Home page", async ({page}) => {
   await page.goto("https://www.google.com/");
   const pageTitle=page.title();
   console.log("Page title is :", await pageTitle);
   await expect(page).toHaveTitle("Google");
   await expect(page).toHaveURL("https://www.google.com/");
   await page.close();

})
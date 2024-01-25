//import {test, expect} from 'playwright\test'
const { test, expect } = require('@playwright/test');
test("Locate elements", async({page})=>{
await page.goto("https://www.demoblaze.com/");
await page.click('id=login2');
//css selector
await page.fill("#loginusername","pavanol");
//css selector
//await page.type("input[id='loginpassword']","test@123");

await page.locator("input[id='loginpassword']").fill("test@123");
//xpath
//verify log out is present
await page.click("//button[text()='Log in']");
const logoutlink =await page.locator("//a[text()='Log out']");
await expect(logoutlink).toBeVisible();
await page.close();
})
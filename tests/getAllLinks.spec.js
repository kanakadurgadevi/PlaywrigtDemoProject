const { test, expect } = require('@playwright/test');
test("getAllLinks", async ({page}) =>{
await page.goto("https://www.demoblaze.com/");
//const links= await page.$$('a');
//for(const link of links){
//const linkText= await link.textContent();
//console.log(linkText);
await page.click('id=login2');
await page.fill("#loginusername","pavanol");
await page.locator("input[id='loginpassword']").fill("test@123");
await page.click("//button[text()='Log in']");
page.waitForSelector("//div[@class='card-block']/h4/a");
const products= await page.$$("//div[@class='card-block']/h4/a");
 for(const product of products){
  const productName = await product.textContent();
  console.log("Product labels", productName);
 }

})
// HOME PAGE

import { test, except } from "@playwright/test";

test("Home Page", async function({page}) {

//Launch Browser
await page.goto('https://www.facebook.com/login.php/')

//TITLE & URL
let pageTitle = await page.title()
console.log("PAGE TITLE:", await pageTitle)

console.log("PAGE url :" , await page.url())
await page.waitForTimeout(2000)
})
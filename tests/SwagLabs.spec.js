import {test , expect} from "@playwright/test"
test ("Handling Swag labs LoginPage, Navigating Homepage", async function({page}){ // FIXTURE

//Launch Browser
await page.goto('https://www.saucedemo.com/')

//Title & URL
let pageTitle = await page.title()
console.log("PAGE TITLE :", await pageTitle)
console.log("PAGE URL :", await page.url())

//ASSERTION
await expect(page).toHaveTitle('Swag Labs')
await expect(page).toHaveURL('https://www.saucedemo.com/')

//Login Page
await page.locator('//input[@placeholder="Username"]').fill('standard_user')
await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')

await page.locator('[id="login-button"]').click()
await page.waitForTimeout(2000)

await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click()
await page.waitForTimeout(2000)
await page.locator('[id="add-to-cart-sauce-labs-bike-light"]').click()
await page.waitForTimeout(3000)
await page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
await page.waitForTimeout(2000)

await page.locator('[id="react-burger-menu-btn"]').click()
await page.waitForTimeout(2000)
await page.locator('[id="logout_sidebar_link"]').click()
await page.waitForTimeout(2000)
})
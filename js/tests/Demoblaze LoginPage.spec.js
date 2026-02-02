import {test , expect} from "@playwright/test"
test ("Handling Demoblaze LoginPage, Navigating Homepage", async function({page}){ // FIXTURE

//Launch Browser
await page.goto('https://www.demoblaze.com/')

//Title & URL
let pageTitle = await page.title()
console.log("PAGE TITLE :", await pageTitle)
console.log("PAGE URL :", await page.url())

//ASSERTION
await expect(page).toHaveTitle('STORE')
await expect(page).toHaveURL('https://www.demoblaze.com/')

//Login Page

await page.locator('[id="login2"]').click()

await page.locator('[id="loginusername"]').fill('pavanol')
await page.locator('[id="loginpassword"]').fill('test@123')

await page.locator('[onclick="logIn()"]').click()
await page.waitForTimeout(5000)

await page.locator('[id="logout2"]').click()
await page.waitForTimeout(5000)


})
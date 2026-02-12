//ASSERTION
import {test, expect} from '@playwright/test'

test("SauceDemo Assertion" , async ({page})=>{
//Launch Browser
await page.goto('https://www.saucedemo.com/')

//login credentials
await page.locator('[id="user-name"]').fill('standard_user')
await page.waitForTimeout(2000)

await page.locator('[id="password"]').fill('secret_sauce')
await page.waitForTimeout(3000)

await expect( await page.locator('[id="user-name"]')).toBeVisible()
await expect( await page.locator('[id="user-name"]')).toBeEnabled()
//await expect( await page.locator('[id="user-name"]')).toBeEmpty()
await expect( await page.locator('[id="user-name"]')).toBeEditable()

await page.click('[value="Login"]')
await page.waitForTimeout(2000)

//Feature: Login
//  Scenario: Successful login
//    Given I am on the login page
//    When I enter valid credentials
//    Then I should see the dashboard

let productText = await page.$$('//div[@class="inventory_list"]//div[2]//div//a//div')

for (const element of productText) {
    let text = await element.textContent()
    console.log(await text.trim())
}
 await page.waitForTimeout(3000)

let add = await page.$$('//button[text()="Add to Cart"]')

for (const element of add) {
    await element.click()
}
await page.waitForTimeout(3000)
})


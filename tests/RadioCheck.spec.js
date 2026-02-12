//RADIO

import {test , expect} from "playwright/test"

test.skip("Handling Radio Button" , async ({page}) => {
//lanch Browser

await page.goto('https://testautomationpractice.blogspot.com/')

//Radio button

await page.locator('[id="male"] ').check()
await page.waitForTimeout(3000)

await page.check('[id="female"]')
await page.waitForTimeout(3000)
})

test("Handling Single & Multi Check boxes" , async function({page}){

//launch Browser

await page.goto('https://testautomationpractice.blogspot.com/')

//SINGLE CHECK BOX
await page.locator('[id="sunday"]').check()
await page.waitForTimeout(5000)

//ASSERTION

await expect(await page.locator('[id="sunday"]')).toBeChecked()
await expect(await page.locator('[id="sunday"]').isChecked() ).toBeTruthy()
await page.waitForTimeout(3000)

//MULTIPLE CHECK BOX

let multiCheckbox =[

await page.locator('[id="tuesday"]'),
await page.locator('#thursday'),
await page.locator('//input[@id="saturday"]')

]

for (const element of multiCheckbox) {
    await element.click()
}
await page.waitForTimeout(3000)

//UN SELECT MULTI CHECK BOX

for (const element of multiCheckbox) {
    if(await element.isChecked()) {
        await element.uncheck()
        await expect(element).not.toBeChecked()
    }
}
await page.waitForTimeout(3000)

})
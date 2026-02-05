//BUILT IN LOCATORS

import {test , except} from "@playwright/test"

test("Orange HRM", async ({Page})=>{

//Lauch browser
await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//ALT TEXT
let orangeLogo = await page.getByAlttext('company-branding')
await except(orangeLogo).toBeVisible()
 
//PLACE HOLDER
await page.getByPlaceholder('Username').fill('admin')
await page.getByPlaceeholder('Password').fill('admin123')

//ROLE
await page.getByRole('button' ,{name : " Login " }).click()

//TEXT
let Username = await page.locator('[class="oxd-userdropdown-name"]').textcontent()
console.log("User Name:", await userName.trim())

await expect (await page.getBytext(userName)).toBeVisible()

//Label

await expect(await page.getBylabel('Sidepanel')).toBeVisible()

//Title
await page.getByTitle('Help').click()

//Test Id

//Refer from playwright.dev website

})

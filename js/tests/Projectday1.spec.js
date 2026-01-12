import{test, except} from "@playwright/test"
import { Console } from "console"
test ("Handling Login", async function ({page}) {
  
//Launch Browser
await page.goto ('https://practicetestautomation.com/practice-test-login/')


await page.fill('id=username', 'student') 
await page.getByLabel('Password').fill('Password123') 
await page.click('.btn')
await page.waitForTimeout(3000)
await page.locator(('//a[text()="Log out"]')).click()
await page.waitForTimeout(4000)
})






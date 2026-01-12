//NORMAL WORK FLOW

//1.Browser Launc 2. Login 3. Print the product name,
//4. select a product and add to cart, 5. verify the cart option, 6. Logout

import {test , expect} from "@playwright/test"
import { off } from "process"

test("Handling Demoblaze", async ({page})=>{ // FIXTURE

//Launch Browser
await page.goto('https://www.demoblaze.com/')

//Login Credentials

await page.click('[id="login2"]')
await page.fill('[id="loginusername"]','pavanol')
await page.fill('[id="loginpassword"]', 'test@123')
await page.click('//button[text()="Log in"]')
await page.waitForTimeout(3000)

//Print the product text
let products = await page.$$('//h4//a')

for (const element of products) {
   let text = await element.textContent()
   console.log(await text.trim())
   
   if(text === "Sony xperia z5"){
    await element.click()
    break
   }
   
}
await page.waitForTimeout(3000)

//add to cart
//alert

await page.on('dialog', async a=>{
await expect(a.message()).toContain('Product added.')
await a.accept()
})

await page.click('//a[text()="Add to cart"]')

//CART
await page.click('[id="cartur"]')

//assertion
let validate = 'Sony xperia z5'

// await expect(page.locator('(//tbody[@id="tbodyid"]//tr//td[contains(text(),"${validate}")])[2]))''

await page.click('[id="logout2"]')
await page.waitForTimeout(3000)

})

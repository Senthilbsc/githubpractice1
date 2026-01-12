//BEFORE ALL AND AFTER ALL
import {test , expect} from "@playwright/test"

let page

test.beforeAll(async ({browser})=>{ // FIXTURE

let context = await browser.newcontext()
page = await context.newpage()

//Launch Browser
await page.goto('https://www.demoblaze.com/')

//Login Credentials

await page.click('[id="login2"]')
await page.fill('[id="loginusername"]','pavanol')
await page.fill('[id="loginpassword"]', 'test@123')
await page.click('//button[text()="Log in"]')
await page.waitForTimeout(3000)
})

test.afterAll(async ()=>{
    //Logout
await page.click('[id="logout2"]')
await page.waitForTimeout(3000)

})

test("Print the product text", async({page})=>{

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

})

test("Add to Cart", async({page})=>{
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
})

test ("Verify the Cart", async ({page})=>{

//CART
await page.click('[id="cartur"]')

//assertion
let validate = 'Sony xperia z5'
})


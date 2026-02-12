//HANDLING DROP DOWN

import {test , expect} from "@playwright/test"

test ("Handling Drop Down" , async ({page})=>{

//LAUNCH BROWSER
await page.goto('https://testautomationpractice.blogspot.com/')

//Single drop down
//Visible Text
await page.locator('[id="country"]').selectOption('India')
await page.waitForTimeout(3000)

//label
await page.locator('[id="country"]').selectOption({label : 'China' })
await page.waitForTimeout(3000)

//Value
await page.locator('[id="country"]').selectOption({Value : 'australia'})
await page.waitForTimeout(3000)

//Index
await page.locator('[id="country"]').selectOption({index : 3})
await page.waitForTimeout(3000)

//Assertions
await expect (await page.locator('//select[@id="country"]//option')).toHaveCount(10)

await expect  ((await page.$$('[id="country"] option')).length).toBe(10)


//MULTIPLE DROP DOWN

await page.locator('[id="colors"]').selectOption(['Red' , 'Blue' , 'Red' , 'Green'])
await page.waitForTimeout(2000)

await page.locator('[id="colors"]').selectOption([])
await page.waitForTimeout(3000)

await page.locator('[id="colors"]').selectOption([{label : "Red" } , {value : "green"}, {index : 4},{index : 6}])
await page.waitForTimeout(3000)
})


test.only("Auto-Suggets/Bootstrap drop" , async({page})=>{

//Launch the browser

await page.goto('https://www.amazon.in/')

//To

await page.locator('[id="twotabsearchtextbox"]').fill('Laptops')
await page.waitForTimeout(2000)

let types = await page.$$('//div[@id="nav-flyout-searchAjax"]//div[contains( @class,"s-suggestion s-suggestion")]')

for (const element of types) {
let text = await element.textContent()
console.log(text.trim())

if (await text === "laptops under 50k"){
await element.click()
}
}

await page.waitForTimeout(3000)
})

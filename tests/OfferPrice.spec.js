import {test, expect} from "@playwright/test"

test ("Myntra Homepage Handling", async function name({page}) {

await page.goto('https://www.myntra.com/men-jeans')

//search a product

let allproduct = await page.$$('//span[@class="product-strike"]//preceding-sibling::span')

for (const element of allproduct) {
    let text = await element.textContent()
    console.log(text.trim())    
}
await page.waitForTimeout(3000)

})
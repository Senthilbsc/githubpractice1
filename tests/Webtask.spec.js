import {test, expect} from "@playwright/test"
test ("webtable handling", async ({page}) => {    
await page.goto('https://demo.guru99.com/test/web-table-element.php')

let change = await page.locator('//table/tbody/tr/td[1]/child::a[contains(text(),"Hero MotoCorp")]/parent::td/following-sibling::td[4]/child::font').textContent()
    console.log("value",change)    
await page.waitForTimeout(3000)

})

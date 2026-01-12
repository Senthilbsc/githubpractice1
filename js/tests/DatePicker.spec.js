//DATE PICKER

import {test , expect} from "@playwright/test"

test("Date Picker Handling" , async ({page})=>{

//LAUNCH BROWSER
await page.goto('https://testautomationpractice.blogspot.com/')

// APPROACH-1
//await page.locator('[id="datepicker"]').fill('11/23/2028')

// APPROACH - 2
await page.locator('[id="datepicker"]').click()
 

let selectDate = "23"
let selectedMonth = 'November'
let selectedYear = "2030"

while(true){
   let currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
   let currentYear = await page.locator('[class="ui-datepicker-year"]').textContent()

   if(currentMonth === "November" && currentYear === "2030"){
    break
   }
 await page.click('//span[text()="Next"]')
//  await page.click('//span[text()="Prev"]')
}
   
//APPROACH -1
// await page.locator('//a[@class="ui-state-default" and text()= "${selectedDate}"]').click()


//APPROACH - 2
 let dates = await page.$$('[class="ui-state-default" ]')
 
 for (const element of dates) {
 let text = await element.textContent()
 if(text === "23"){
   await element.click()
 }
}
  await page.waitForTimeout(3000)
})

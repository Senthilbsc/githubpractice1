//JavaScript object Notation

import {test, expect} from "@playwright/test"

const {data1} = require('../dataTest/testData1.json')

test.describe("Reading all valid & invalid data from json" , async ()=>{

test("Reading data from json valid testData" , async ({page})=>{

//browser launch

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//enter login
await page.getByPlaceholder('Username').fill(data1[0].validUser)
await page.waitForTimeout(2000)

await page.getByPlaceholder('Password').fill(data1[0].validpass)
await page.waitForTimeout(200*10)

await page.getByRole('button', {name: " Login "}).click()
await page.waitForTimeout(200*10)


})

test("Reading data from json invalid testData" , async ({page})=>{

//browser launch

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//enter login
await page.getByPlaceholder('Username').fill(data1[0].invalidUser)
await page.waitForTimeout(2000)

await page.getByPlaceholder('Password').fill(data1[0].invalidUser)
await page.waitForTimeout(200*10)

await page.getByRole('button', {name: " Login "}).click()
await page.waitForTimeout(200*10)

})   
})
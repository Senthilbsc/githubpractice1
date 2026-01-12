import {test} from "@playwright/test"

import xlsx from 'xlsx'

import path from "path"
import { off } from "process"

const book = path.join("./testData/testDataXL3.xlsx")

const workbook= xlsx.readFile(book)

const worksheet = workbook.Sheets["XLData"]

const xlToJson = xlsx.utils.sheet_to_json(worksheet)

// console.log(xlToJson)

// test(`Read Data from excel Sheet ${xlToJson[0].ID}` , async ({page})=>{

// await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// await page.getByPlaceholder('Username').fill(xlToJson[0].USERNAME)
// await page.waitForTimeout(2000)

// await page.getByPlaceholder('Password').fill(xlToJson[0].PASSWORD)
// await page.waitForTimeout(2000)

// await page.getByRole('button' , {name : " Login "}).click()
// await page.waitForTimeout(2000)

// })

// for (const element of xlToJson) {
    
// test(`Read Data from excel Sheet ${element.ID}` , async ({page})=>{

// await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// await page.getByPlaceholder('Username').fill(element.USERNAME)
// await page.waitForTimeout(2000)

// await page.getByPlaceholder('Password').fill(element.PASSWORD)
// await page.waitForTimeout(2000)

// await page.getByRole('button' , {name : " Login "}).click()
// await page.waitForTimeout(2000)

// })

// }


    
xlToJson.forEach((element) => {

test(`Read Data from excel Sheet ${element.ID}` , async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder('Username').fill(element.USERNAME)
await page.waitForTimeout(2000)

await page.getByPlaceholder('Password').fill(element.PASSWORD)
await page.waitForTimeout(2000)

await page.getByRole('button' , {name : " Login "}).click()
await page.waitForTimeout(2000)

})


})
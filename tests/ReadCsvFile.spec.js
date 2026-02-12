// import {test} from "@playwright/test"

// import {parse} from "csv-parse/sync"

// import fs from 'fs'

// import path from 'path'

// const readCsv = parse(fs.readFileSync("./testData/testData2.csv"), {
// Columns : true,
// skip_empty_lines : true,
// skip_records_with_empty_values : true,
// // delimiter : ";"

// })

import{test, expect} from "@playwright/test"

test("Handling ",async ({page})=>{
await page.goto("https://www.demoblaze.com/")
await page.locator('[id="login2"]').click()

await page.locator('[id="loginusername"]').fill('Senthil')
await page.locator('[id="loginpassword"]').fill('sent1234')

await page.locator('[onclick="logIn()"]').click()
await page.waitForTimeout(2000)

})

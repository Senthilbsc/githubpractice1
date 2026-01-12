import {test,  expect} from "@playwright/test"

test.describe("Read Data from dotenv files", () => {

test(`Read the data from dotenv in ${process.env.ENV}` ,async ({page}) => {

await page.goto(process.env.ORANGE_URL)
await page.waitForTimeout(2000)

await page.getByPlaceholder('Username').fill(process.env.USERNAME)
await page.waitForTimeout(2000)

await page.getByPlaceholder('Password').fill(process.env.PASSWORD)
await page.waitForTimeout(2000)

await page.getByRole('button' , {name : " Login "}).click()
await page.waitForTimeout(2000)

})
})

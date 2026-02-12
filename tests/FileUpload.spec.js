//Fileupload 

const {test, except} = require('@playwright/test')

test("Single File Upload" , async ({page})=>{

//Launch Browser
await page.goto('https://testautomationpractice.blogspot.com/')

//Single File Upload
//await page.locator('[id="singleFileInput"]').setInputFiles("tests/Assertion.spec.js")
//await page.pause()

await page.locator('[id="singleFileInput"]')
.setInputFiles("C:/Users/Senthil/Desktop/Senthil.docx")
await page.waitForTimeout(5000)

await page.locator('[id="multipleFilesInput"]')
.setInputFiles(["C:/Users/Senthil/PLAYWRIGHT/tests/Test1.pdf", "C:/Users/Senthil/PLAYWRIGHT/tests/Test2.pdf"])
await page.waitForTimeout(5000)

})

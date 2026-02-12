//WEB TABLE

const {test, expect} = require('@playwright/test')
const { text } = require('stream/consumers')
test ("Pagination Web Table", async({page})=>{

//LAUNCH BROWSER
await page.goto('https://testautomationpractice.blogspot.com/')

//columns
    let tablecolumns=await page.locator ('//table[@id="productTable"]//thead//tr//th')
    console.log("Table columns count: " , await tablecolumns.count())

//rows
    let tablerows=await page.locator ('//table[@id="productTable"]//tbody//tr')
    console.log("Table rows : " , await tablerows.count())

//SELECT A PRODUCT
    let selectProduct = await tablerows.filter({
        has : page.locator('td'),
        hasText : "Tablet"
    }) 

await selectProduct.locator('input').click()
await page.waitForTimeout(3000)

//3 MULTILE CHECKBOX SELECTION

await multiproduct (page, tablerows, "Smartphone")
await multiproduct (page, tablerows, "Wireless Earbuds")
await page.waitForTimeout(3000)

//4 print 1st row data
for (let i=0; i< await tablecolumns.count(); i++){ //i=0; i<5; i++
 let datas = await tablecolumns.nth(i).locator('td') //row 1 data
 //   console.log (await datas.alltextContent())
 
 for (let j=0; j< await datas.count(); j++){  //        j=0; j<5; j++
   let text = await datas.nth(j).textContent() //column data
   console.log(await text)
}

}

//PRINT ALL THE PRODUCTS FROM ALL THE PAGES
let nums = await page.locator('[id="pagination"]>li>a')
 for(let k=0; k< await nums.count(); k++){ //   k=0; k<5; k++
    if(k> 0){
        await nums.nth(k).click()
    }
    let rows = await page.$$('//table[@id="productTable"]//tbody//tr//td')
   
    for(const element of rows){
        let text = await element.textContent()
        console.log(await text) 
    }   
    } 

//RE-usable
async function multiproduct(page, tablerows, productName){
    let selectProduct = await tablerows.filter({
        has : await page.locator ('td'),
        hasText : productName
    })
    await selectProduct.locator('input').click()
}

})
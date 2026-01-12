//MOUSE ACTIONS
import { test, expect } from '@playwright/test';

test("Mouse Hover" , async ({page})=>{
    // Launch BROWSER
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.waitForTimeout(3000)
    //POINT
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(2000)
    
    await page.locator('//a[text()="Laptops"]').click()
    await page.waitForTimeout(3000)
})

test("Mouse Double Click" , async ({page})=>{
    // Launch BROWSER
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(3000)
    //DOUBLE CLICK
    await page.locator('//button [text()="Copy Text"]').dblclick()
    await page.waitForTimeout(3000)
})

test("Drag and Drop" , async ({page})=>{
    // Launch BROWSER
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(3000)
    //DRAG AND DROP
    let source = page.locator('[id="draggable"]')
    let target = page.locator('[id="droppable"]')   

   // await source.dragTo(target)
    //await page.waitForTimeout(3000)

    //APPROACH 2
    //await page.dragAndDrop('[id="draggable"]' , '[id="droppable"]')
    //await page.waitForTimeout(3000)

    //APPROACH 3
    await source.hover()
    await page.mouse.down()
    await page.waitForTimeout(3000)
 
    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(3000)
})

test("Right Click " , async({page})=>{
    // Launch BROWSER
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    await page.waitForTimeout(3000)

    //RIGHT CLICK
await page.locator('//span[text()="right click me"]').click({button:'right'})
await page.waitForTimeout(3000)

await page.locator('//span[text()="Quit"]').click()
await page.waitForTimeout(3000)
})


test("Keyyboard Actions" , async({page})=>{
    // Launch BROWSER
    await page.goto('https://gotranscript.com/text-compare/')
    await page.waitForTimeout(3000) 

    //fill tesxt area 1
    await page.locator('[name="text1"]').fill("Javascript is programming language")
    await page.waitForTimeout(2000)
    
    //Select all text  (CTRL + A)
    await page.keyboard.press('Control+KeyA')
    await page.waitForTimeout(2000) 

    //Copy  (CTRL + C)
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(2000)     
    //TAB
    await page.keyboard.down ('Tab')
    await page.keyboard.up('Tab')
    await page.waitForTimeout(2000)
    //Paste (CTRL + V)
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(3000) 
})

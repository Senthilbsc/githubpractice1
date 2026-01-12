//HANDLING DIALOG'S

import{test, expect} from '@playwright/test'

test("simple alert", async ({page})=>{
    //launch BROWSER
    await page.goto("https://testautomationpractice.blogspot.com/")
    //Simple alert 
    await page.click('[id="alertBtn"]')
await page.waitForTimeout(3000)
    
    await page.on('dialog', async a =>{
        expect(await a.type()).toEqual("alert")
        expect(await a.message()).toContain("I am an alert box!")

        await a.accept()
    })
    
})

test("confirm alert", async ({page})=>{
    //launch BROWSER
    await page.goto("https://testautomationpractice.blogspot.com/")
    //confirm alert 
    await page.click('[id="confirmBtn"]')
    await page.on('dialog', async c =>{
        expect(await c.type()).toEqual("confirm")
        expect (await c.message()).toContain("Press a button!") 
        await page.waitForTimeout(3000)
        await c.dismiss()
    })
    await page.waitForTimeout(3000)
})

test("prompt alert", async ({page})=>{
    //launch BROWSER
    await page.goto("https://testautomationpractice.blogspot.com/")
  
        await page.once('dialog', async p =>{
        await expect(p.type()).toEqual("prompt")
        expect (p.message()).toContain("Please enter your name")
        expect( p.defaultValue()).toEqual("Harry Potter")
        await p.accept("Senthil")
        

    })
    await page.click('[id="promptBtn"]')
    await page.waitForTimeout(3000)
})



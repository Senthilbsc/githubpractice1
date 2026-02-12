//FRAMES
import { test, expect } from '@playwright/test'

test('Frame Handling 1', async ({ page }) => {
    // Launch BROWSER
    await page.goto('https://ui.vision/demo/webtest/frames/', {waitUntil: 'networkidle'})

    //FRAME - 1

    let framescount = await page.frames()
    console.log("All frames Count:" , await framescount.length)

    let frame1 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" })

    await frame1.locator('[name="mytext1"]').fill("JAVASCRIPT")
    await page.waitForTimeout(3000)

    //FRAME - 2

    await page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]').fill("PLAWRIGHT")
    await page.waitForTimeout(3000)
})

test('Frame Handling 2', async ({page})=>{
    // Launch BROWSER
    await page.goto('https://ui.vision/demo/webtest/frames/')
    
    //INNER FRAME

    let frame3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html"})
    
    let childFrame = await frame3.childFrames()
    console.log("Child Frames Count:", await childFrame.length)

    await childFrame[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').click()
    await page.waitForTimeout(3000)
    await childFrame[0].locator('(//div[@class="uHMk6b fsHoPb"])[3]').click()       
    
    await page.waitForTimeout(3000)
})

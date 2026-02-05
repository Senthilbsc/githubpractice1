    //BUILT IN LOCATORS

    import {test , except, expect} from "@playwright/test"

    test("Orange HRM", async ({page})=>{

    //Lauch browser
    await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //ALT TEXT
    let orangeLogo = await page.getByAltText('company-branding')
    await expect(orangeLogo).toBeVisible()
    
    //PLACE HOLDER
    await page.getByPlaceholder('Username').fill('admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //ROLE
    await page.getByRole('button' ,{name : " Login " }).click()

    //TEXT
    let Username = await page.locator('[class="oxd-userdropdown-name"]').textContent()
    console.log("User Name:", await Username.trim())
    

    await expect (await page.getByText(Username)).toBeVisible()
    
    //Label

    await expect(await page.getByLabel('Sidepanel')).toBeVisible()
    await page.waitForTimeout(3000)

    //Title
    await page.getByTitle('Help').click()

    //Test Id

    //Refer from playwright.dev website

    })

    
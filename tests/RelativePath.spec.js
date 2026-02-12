//https://www.saucedemo.com/

//username
await path.locator('//input[@placeholder="Username"]') //basic xpath
await path.locator('(//input[@class="input_error form_input"])[1])')//index
//text not available
//partial text not available
await path.locator("//input[contains(@data-test, 'user')]")//Patial AttValue

//Password
await path.locator('//input[@placeholder="Password"]')
await path.locator('(//input[@class="input_error form_input"])[2]')
//text not available
//partial text not available
await path.locator("//input[contains(@data-test, 'pass')]")//Patial AttValue

//Login
await path.locator('//input[@data-test="login-button"]')//Basic xpath
//Index not available
//text not available
//partial text not available
await path.locator("//input[contains(@class,'submit')]")// Partial AttValue


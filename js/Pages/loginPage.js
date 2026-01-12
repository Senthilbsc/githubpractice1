exports.LoginPage = class LoginPage{

constructor(page){
    this.page = page
    this.userId = '[id="user-name"]'
    this.password ='[id="password"]'
    this.loginBtn = '[name="login-button"]'
}
async gotoBrowser(){
    await this.page.goto('https://www.saucedemo.com/')
}

async userDetails(user, pass) {
await this.page.locator(this.userId).fill(user)
await this.page.locator(this.password).fill(pass)
await this.page.locator(this.loginBtn).click()
await this.page.waitForTimeout(2000)

}
}
 

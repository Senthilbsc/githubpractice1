//cart Page.js
export class CartPage 
{   
    constructor(page){
        this.page = page
        this.cartItems = this.page.$$('[class="inventory_item_name "]')
        this.checkoutBtn = this.page.locator('[data-test="checkout"]')
        this.firstName = this.page.locator('[data-test="firstName"]')
        this.lastName = this.page.locator('[data-test="lastName"]')
        this.postalCode = this.page.locator('[data-test="postalCode"]')
        this.continueBtn = this.page.locator('[data-test="continue"]')  
    }   
    async verifyCartItem(name){
        let items = await this.cartItems

        for (const element of items) {
            let text = await element.textContent()
            console.log(await text.trim())      
            if(await text.includes(name)){
                console.log("Item is present in the cart: " + name)
                break
            }   
        }
    }

    async proceedToCheckout(){
        await this.checkoutBtn.click()
        await this.page.waitForTimeout(2000)
        await this.firstName.fill('Senthil')
        await this.lastName.fill('Kumar')
        await this.postalCode.fill('600100')
        await this.continueBtn.click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({path: "C:/Users/Senthil/PLAYWRIGHT/githubpractice1/js/tests/images" + 'checkoutPage.png'})   
        
    }     
    
}
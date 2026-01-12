//
export class HomePage 
{
constructor(page){
this.page = page
this.selectDropDown = this.page.locator('[data-test="product-sort-container"]')
this.productsName = this.page.$$('[class="inventory_item_name "]')
this.addToCart = this.page.locator('[name="add-to-cart"]')
this.cart = this.page.locator('[data-test="shopping-cart-link"]')
    }


async printProducts(name){

    await this.selectDropDown.selectOption("Price (low to high)")
    await this.page.waitForTimeout(3000)

    let products = await this.productsName

    for (const elements of products) {
        let text = await elements.textContent()
        console.log(await text.trim())

        if(await text.includes(name)){
            await elements.click()
            break
        }
    }

}

async productAddedToCart(){

    await this.addToCart.click()
    await this.cart.click()

}

}
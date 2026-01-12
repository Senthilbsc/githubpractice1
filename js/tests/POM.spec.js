//
import {test, expert} from "@playwright/test"
import { LoginPage } from "../Pages/loginPage"
import { saucedemo } from "./utils/testData"
const {HomePage} = require ('../Pages/homePage')
const {CartPage} = require ('../Pages/cartPage')

test ("Page Object Model" , async ({page})=>{

    let lp = new LoginPage(page)

    await lp.gotoBrowser()
    await lp.userDetails(saucedemo.user , saucedemo.pass)

    let hp = new HomePage(page)
    await hp.printProducts(saucedemo.name)
    await hp.productAddedToCart()

    let cp = new CartPage (page)
    await cp.verifyCartItem(saucedemo.name)
    await cp.proceedToCheckout()
})



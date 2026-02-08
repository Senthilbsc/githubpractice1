const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the login page', async function () {
  await this.page.goto('https://www.saucedemo.com/');
});

When('I login with valid credentials', async function () {
  await this.page.fill('#user-name', 'standard_user');
  await this.page.fill('#password', 'secret_sauce');
  await this.page.click('[value="Login"]');
});

Then('I should see the inventory page', async function () {
  await this.page.waitForSelector('.inventory_list');
  const url = this.page.url();
  if (!url.includes('inventory')) {
    throw new Error('Did not land on inventory page: ' + url);
  }
});

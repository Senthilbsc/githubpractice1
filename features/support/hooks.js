const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60 * 1000);

Before(async function () {
  const headlessEnv = process.env.HEADLESS;
  const headless = (typeof headlessEnv === 'string') ? headlessEnv !== 'false' : true;
  this.browser = await chromium.launch({ headless });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  if (this.browser) await this.browser.close();
});

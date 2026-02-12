const { Builder, By, Key, until } = require("selenium-webdriver");

(async function firstTest() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://example.com");
    console.log(await driver.getTitle());
  } finally {
    await driver.quit();
  }
})();

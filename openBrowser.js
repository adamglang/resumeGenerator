const puppeteer = require("puppeteer");
const constants = require("./constants");

module.exports = class OpenBrowser {
  static async init() {
    const browser = await puppeteer.launch({"headless": constants.isHeadless});
    const page = await browser.newPage();
    await page.goto("https://www.linkedin.com/", {"waitUntil": "networkidle2"});
    return page;
  }
};
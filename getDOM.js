const jsdom = require("jsdom");
const constants = require('./constants');
const { JSDOM } = jsdom;

class GetDOM {
  static async init({un, pw, linkedin}, page) {
    try {
      await GetDOM.fillAndSubmitAuth(page, un, pw, linkedin);
      await GetDOM.openSections(page);
      const scrapedDOM = await page.evaluate(() => document.querySelector(".core-rail").innerHTML);
      return (new JSDOM(scrapedDOM, { runScripts: "outside-only" })).window;
    } catch(e) {
      throw new Error(`Puppeteer couldn't get the DOM - ${e.stack}`)
    }
  }

  static async openSections(page) {
    await setTimeout(() => {
      // This janky setTimeout gives linkedin's lazy loading time to open you can change the value in constants if you have a slower network
      console.log('waited for clicks');
    }, constants.waitForLazyLoader);

    const summaryOpener = "#line-clamp-show-more-button";
    const skillsOpener = "button[aria-controls=skill-categories-expanded]";
    const projectsOpener = "button[aria-label='Expand projects section']";
    await page.click(summaryOpener);
    await page.click(skillsOpener);
    await page.click(projectsOpener);
  }

  static async fillAndSubmitAuth(page, un, pw, linkedin) {
    const unField = "#username";
    const pwField = "#password";
    const submitButton = "button[data-litms-control-urn=login-submit]";
    await page.click(unField);
    await page.keyboard.type(un);
    await page.click(pwField);
    await page.keyboard.type(pw);
    await page.click(submitButton);
    await page.waitForNavigation();
    await page.goto(linkedin, {"waitUntil": "networkidle2"});

    console.log('Logged in now');

    return page;
  }
}

module.exports = GetDOM;
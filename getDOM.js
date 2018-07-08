const puppeteer = require("puppeteer");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const configs = require("./configs");

class GetDOM {
  static async init(un, pw) {
    try {
      const page = await GetDOM.openBrowser();

      //Hack to quickly work around linkedin's lazy loader
      page.setViewport({
        "width": configs.viewportWidth,
        "height": configs.viewportHeight
      });

      await GetDOM.fillAndSubmitAuth(page, un, pw);
      await GetDOM.openSections(page);
      const scrapedDOM = await page.evaluate(() => document.querySelector(".core-rail").innerHTML);
      return (new JSDOM(scrapedDOM, { runScripts: "outside-only" })).window;
    } catch(e) {
      console.error(`Puppeteer couldn't get the DOM - ${e.stack}`)
    }
  }

  static async openSections(page) {
    const summaryOpener = ".pv-top-card-section__summary-toggle-button";
    const skillsOpener = ".pv-skills-section__additional-skills";
    const projectsOpener = ".pv-accomplishments-block__expand";

    await page.click(summaryOpener);
    await page.click(skillsOpener);
    await page.click(projectsOpener);
  }

  static async fillAndSubmitAuth(page, un, pw) {
    const unField = "#login-email";
    const pwField = "#login-password";
    const submitButton = "#login-submit";

    await page.click(unField);
    await page.keyboard.type(un);
    await page.click(pwField);
    await page.keyboard.type(pw);
    await page.click(submitButton);
    await page.waitForNavigation();
    await page.goto("https://www.linkedin.com/in/adam-lang-96681764/",{"waitUntil": "networkidle2"});

    return page;
  }

  static async openBrowser() {
    const browser = await puppeteer.launch({"headless": configs.isHeadless});
    const page = await browser.newPage();
    await page.goto("https://www.linkedin.com/", {"waitUntil": "networkidle2"});
    return page;
  }
};

module.exports = GetDOM;
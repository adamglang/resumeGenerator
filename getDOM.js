const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const constants = require("./constants");

class GetDOM {
  static async init(un, pw, profile, page) {
    try {
      //Hack to quickly work around linkedin's lazy loader
      page.setViewport({
        "width": constants.viewportWidth,
        "height": constants.viewportHeight
      });

      await GetDOM.fillAndSubmitAuth(page, un, pw, profile);

      console.log("---- Successfully logged into your linkedIn profile!");

      await GetDOM.openSections(page);

      console.log("------ Scraping all the data from linkedIn");

      const scrapedDOM = await page.evaluate(() => document.querySelector(".core-rail").innerHTML);

      console.log("------- Successfully scraped the DOM");

      return (new JSDOM(scrapedDOM, { runScripts: "outside-only" })).window;
    } catch(e) {
      console.error(`Puppeteer couldn't get the DOM - ${e.stack}`)
    }
  }

  static async openSections(page) {
    console.log("----- Opening all the sections with data");

    const summaryOpener = ".pv-top-card-section__summary-toggle-button";
    const skillsOpener = ".pv-skills-section__additional-skills";
    const projectsOpener = ".pv-accomplishments-block__expand";

    await page.click(summaryOpener);
    await page.click(skillsOpener);
    await page.click(projectsOpener);
  }

  static async fillAndSubmitAuth(page, un, pw, profile) {
    const unField = "#login-email";
    const pwField = "#login-password";
    const submitButton = "#login-submit";

    console.log("--- Logging in into your linkedIn profile");

    await page.click(unField);
    await page.keyboard.type(un);
    await page.click(pwField);
    await page.keyboard.type(pw);
    await page.click(submitButton);
    await page.waitForNavigation();
    await page.goto(profile, {"waitUntil": "networkidle2"});

    return page;
  }
}

module.exports = GetDOM;
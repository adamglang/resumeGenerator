const program = require("commander");
const puppeteer = require("puppeteer");
const constants = require("./constants");
const createModel = require("./createModel");
const getDOM = require("./getDOM");
const mountResume = require("./mountResume");

class MakeResume {
  async init() {
    program.version("0.0.1").parse(process.argv);

    const un = program.args[0];
    const pw = program.args[1];
    const profile = program.args[2];

    try {
      const browser = await puppeteer.launch({"headless": constants.isHeadless});
      const page = await browser.newPage();
      await page.goto("https://www.linkedin.com/", {"waitUntil": "networkidle2"});
      const window = await getDOM.init(un, pw, profile, page);
      const model = await createModel.init(window.document);
      await mountResume.init(page, model);
      //process.exit();
    } catch(e) {
      console.error(`Something went wrong: ${e.stack}`);
    }
  }
}

const makeResume = new MakeResume;
module.exports = makeResume.init();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const placeholder = "<div>FOO BAR</div>";
const window = (new JSDOM(placeholder, { runScripts: "outside-only" })).window;
const newHTML = window.document.body.innerHTML;

class MountResume {
  static async init(page) {
    await page.evaluate((newHTML) => {document.body.innerHTML = newHTML}, newHTML);
  }
}

module.exports = MountResume;
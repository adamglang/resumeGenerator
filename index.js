const server = require('node-http-server');
const constants = require("./constants");
const program = require("commander");
const puppeteer = require("puppeteer");
const createModel = require("./createModel");
const getDOM = require("./getDOM");
const writeHTMLFile = require("./writeHTMLFile");

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

      console.log("-- Going to your linkedIn profile...");

      const window = await getDOM.init(un, pw, profile, page);
      const model = await createModel.init(window.document);

      console.log("---------- Sucessfully created data model");

      await writeHTMLFile(model, profile);

      console.log("----------- PDF template created starting local server");

      await server.deploy({
        "port": 3000,
        "root": "./themes/blackGold",
        "contentType": constants.allowedTypes
      });

      await page.goto("http://localhost:3000", {"waitUntil": "networkidle2"});

      console.log("------------ Sucessfully deployed server... Printing PDF");

      await page.pdf({
          "path": "/Users/langa/Projects/resumeGenerator/resume.pdf",
          "printBackground": true,
          "width": "1000px"
      });

      console.log("------------- PDF generated in root directory! Bye bye now :)");

      process.exit();
    } catch(e) {
      console.error(`Something went wrong: ${e.stack}`);
    }
  }
}

const makeResume = new MakeResume;
module.exports = makeResume.init();
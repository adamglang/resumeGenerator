const server = require('node-http-server');
const constants = require("./constants");
const puppeteer = require("puppeteer");
const createModel = require("./createModel");
const getDOM = require("./getDOM");
const writeHTMLFile = require("./writeHTMLFile");
const getUserData = require("./getUserData");

class MakeResume {
    async init() {
        try {
            const userData = await getUserData();

            console.log("Sweet! Logging into linkedin");

            const browser = await puppeteer.launch({
                "headless": constants.isHeadless,
                "defaultViewport": {
                    width: constants.viewportWidth,
                    height: constants.viewportHeight,
                }
            });
            const page = await browser.newPage();
            await page.goto("https://www.linkedin.com/login", {"waitUntil": "networkidle2"});
            const window = await getDOM.init(userData, page);
            const model = await createModel.init(window.document, userData.name, userData.jobTitle);

            console.log("I successfully generated the data model from your data. Making the PDF now...")

            await writeHTMLFile(model, userData);
            await server.deploy({
                "port": 3000,
                "root": "./themes/blackGold",
                "contentType": constants.allowedTypes
            });

            await page.goto("http://localhost:3000", {"waitUntil": "networkidle2"});
            await page.pdf({
                "path": `${__dirname}/resume.pdf`,
                "printBackground": true,
                "width": "1000px"
            });

            console.log("PDF generated in root directory! Bye bye now :)");

            process.exit();
        } catch(e) {
            throw new Error(`Something went wrong: ${e.stack}`);
        }
    }
}

const makeResume = new MakeResume;
module.exports = makeResume.init();
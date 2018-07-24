const createModel = require("./createModel");
const getDOM = require("./getDOM");
const openBrowser = require("./openBrowser");
const mountResume = require("./mountResume");
const program = require("commander");

class WriteFile {
  async init() {
    program.version("0.0.1").parse(process.argv);

    const un = program.args[0];
    const pw = program.args[1];
    const profile = program.args[2];

    try {
      const page = await openBrowser.init();
      const window = await getDOM.init(un, pw, profile, page);
      const model = await createModel.init(window.document);
      const strReturnedObj = JSON.stringify(model);
      console.log(strReturnedObj);
      await mountResume.init(page);
      //process.exit();
    } catch(e) {
      console.error(`Something went wrong: ${e.stack}`);
    }

  }
}

const writeFile = new WriteFile;
module.exports = writeFile.init();
const createModel = require("./createModel");
const program = require("commander");

class WriteFile {
  async init() {
    program.version("0.0.1").parse(process.argv);

    const un = program.args[0];
    const pw = program.args[1];

    try {
      const model = await createModel.init(un, pw);
      const strReturnedObj = JSON.stringify(model);
      console.log(strReturnedObj);
      //process.exit();
    } catch(e) {
      console.error(`Something went wrong: ${e.stack}`);
    }

  }
}

const writeFile = new WriteFile;
module.exports = writeFile.init();
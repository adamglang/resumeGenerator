const body = require("./themes/blackGold/body");
const head = require("./themes/blackGold/head");

class MountResume {
  static async init(page, model) {
    const themeBody = body.init(model);
    const themeHead = head();
    const evalArg = {themeHead, themeBody};

    await page.evaluate(({themeHead, themeBody}) => {
        document.head.innerHTML = themeHead;
        document.body.innerHTML = themeBody;
    }, evalArg);
  }
}

module.exports = MountResume;
const fs = require("fs");
const body = require("./themes/blackGold/body");
const head = require("./themes/blackGold/head");
const constants = require("./constants");

module.exports = async (model, userData) => {
    const themeBody = body.init(model, userData);
    const themeHead = head();
    const html = `
        <!doctype HTML> 
            <html>
                ${themeHead}
                ${themeBody}
            </html>
        </doctype>
    `;

    fs.writeFile(`./themes/${constants.theme}/index.html`, html, (e) => {
        if(e) {
            console.error(e.stack);
        }
    });
};
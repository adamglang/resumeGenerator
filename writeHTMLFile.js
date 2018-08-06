const fs = require("fs");
const body = require("./themes/blackGold/body");
const head = require("./themes/blackGold/head");

module.exports = async (model, profile) => {
    const themeBody = body.init(model, profile);
    const themeHead = head();
    const html = `
        <!doctype HTML> 
            <html>
                ${themeHead}
                ${themeBody}
            </html>
        </doctype>
    `;

    fs.writeFile("./themes/blackGold/index.html", html, (e) => {
        if(e) {
            console.error(e.stack);
        }
    });
};
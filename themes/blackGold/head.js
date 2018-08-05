const theme = require("./theme.js");

module.exports = () => (`
    <head>
        <meta charset="utf-8">
        <title>Resume</title>
        <style>
            ${theme}
        </style>
        <meta name="description" content="Resume">
        <meta name="author" content="Adam G Lang">
    </head>
`);


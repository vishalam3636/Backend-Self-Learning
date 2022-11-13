// This is our very first node file

const fs = require("fs");

const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);
// now run the index.js file and the text content will be log into terminal

const textOutput = `I am vishal and wowww!! oh-hooo!! said by SS. ❣️🤗`;
fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File written...");
// now run the index.js file and the output.txt file will get created in txt folder

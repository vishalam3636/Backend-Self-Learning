// This is our very first node file

const { log } = require("console");
const fs = require("fs");

//=================================================
//== FS MODULE (readFileSync and writeFileSync) ==//
//=================================================

/*
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);
// now run the index.js file and the text content will be log into terminal

const textOutput = `I am vishal and wowww!! oh-hooo!! said by SS. ❣️🤗`;
fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File written...");
// now run the index.js file and the output.txt file will get created in txt folder

*/

//===============================================//
//========== Synchronous vs Asynchronous ========//
//===============================================//

// Blocking (Synchronous way)
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);

const textOutput = `I am vishal and wowww!! oh-hooo!! said by SS. ❣️🤗`;
fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File written...");

// Non-blocking (asynchronous way: type-1, level-1)
/*
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Will read file..."); // this will be read first then the asynchronous readFile result will be printed.
*/

// Non-blocking (asynchronous way: type-2 (nested, level-2))
/*
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
  });
});
console.log("Will read file...");
*/

// Non-blocking (asynchronous way: type-2 (nested, level-3))
/*
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);
    });
  });
});
console.log("Will read file...");
*/

// Non-blocking (asynchronous way: type-2 (nested, level-4))
fs.readFile("./txt/staaaaart.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error... 💥");

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("your file has been written... 🎉😁");
      });
    });
  });
});
console.log("Will read file...");

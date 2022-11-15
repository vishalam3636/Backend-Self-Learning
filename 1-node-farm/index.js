// This is our very first node file

const fs = require("fs");
const http = require("http");
const url = require("url");

//=======================================================//
//==📔📔 FS MODULE (readFileSync and writeFileSync) 📔=//
//======================================================//

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

//👉🏻 Blocking (Synchronous way)
/*
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);

const textOutput = `I am vishal and wowww!! oh-hooo!! said by SS. ❣️🤗`;
fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File written...");
*/

//👉🏻 Non-blocking (asynchronous way: type-1, level-1)
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
/*
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
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
*/

//=======================================================//
//================📔📔 Creating Server 📔📔============//
//=======================================================//
// for that we need another node module "http"

/*
const server = http.createServer((req, res) => {
  // console.log(req);
  res.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
*/

//=======================================================//
//===================📔📔 Routing 📔📔=================//
//=======================================================//
/*
const server = http.createServer((req, res) => {
  console.log(req.url); // requested url getting consoled

  const pathName = req.url; // request path will be getting stored in pathName

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html", // browser is now expecting an html
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
*/

//=======================================================//
//=========📔📔 Building a very simple API 📔📔========//
//=======================================================//

// Way-1:
/*
const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {

    // In below this part has  been modified, Here we are reading the data each time reaauest is made.
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
*/

// Way-2:
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    // This is modified, we are not reading the data each time reaauest is made
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});

"use strict";

const { read } = require("./library/utilities");

// read("./iceCreamStorage/iceCreame.json")
//   .then((result) => console.log(result.fileData, result.mime))
//   .catch((err) => console.log(err));

const filePath = "./testUtilities.js";
read(filePath).then(console.log).catch(console.log);

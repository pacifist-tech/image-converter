const fs = require("fs");
const path = require("path");
const convert = require("./lib/converter");
const { splitPerIndex } = require("./lib/utils/splitPerIndex");

const imagePath = path.join(__dirname, "images", "bocil.bmp");
convert.bmp.blur(imagePath, "light");

//const outputPath = path.join(__dirname, "7.txt");

// const imageData = fs.readFileSync(imagePath, { encoding: "hex" });
// fs.writeFileSync(outputPath, imageData, { encoding: "utf-8" });

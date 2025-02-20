// setTimeout(function () {
//   console.log("hi");
//   setTimeout(function () {
//     console.log("hello");
//     setTimeout(function () {
//       console.log("hello there");
//     }, 5000);
//   }, 3000);
// }, 1000);

// function setTimeoutPromisified(duration) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
// }
// setTimeoutPromisified(1000).then(function () {
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function () {
//     console.log("hello");
//     setTimeoutPromisified(5000).then(function () {
//       console.log("hello there");
//     });
//   });
// });

//PROMISE CHAINING
// function setTimeoutPromisified(duration) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
// }
// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });

// function setTimeoutPromisified(duration) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
// }
// async function solve() {
//   await setTimeoutPromisified(1000);
//   console.log("hi");
//   await setTimeoutPromisified(3000);
//   console.log("hello");
//   await setTimeoutPromisified(5000);
//   console.log("hi there");
// }
// solve();
// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   fs.readFile(filePath, "utf-8", function (err, data) {
//     data = data.trim();
//     fs.writeFile(filePath, data, function () {
//       cb();
//     });
//   });
// }
// function onDone() {
//   console.log("file has been cleaned");
// }
// cleanFile("a.txt", onDone);
const fs = require("fs");
function cleanFile(filePath, cb) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}
async function main() {
  await cleanFile("a.txt");
  console.log("done cleaning file");
}
main();

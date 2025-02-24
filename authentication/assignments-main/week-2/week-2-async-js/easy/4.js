const fs = require("fs");
const data = "This is the content to write to the file.";
function expensiveOperation() {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum = sum + 1;
  }
  console.log("Expensive operation result: ", sum);
}
fs.writeFile("a.txt", data, (err) => {
  if (err) {
    console.log("Error writing file: ", err);
    return;
  }
  console.log("Data writen to a text file");
});
expensiveOperation();

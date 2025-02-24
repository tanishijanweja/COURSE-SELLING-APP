const fs = require("fs");
const filePath = "a.txt";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err);
    return;
  }
  console.log("File content: ", data);
});

function expensiveOperation() {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum = sum + 1;
  }
  console.log("Expensive operation result: ", sum);
}

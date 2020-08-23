const fs = require("fs")
const parseInput = require("./inputParser/inputParser")

fs.readFile("../input.txt", "utf8", (err, data) => {
  console.log(parseInput(data))
})

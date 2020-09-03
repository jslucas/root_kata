const fs = require("fs")
const R = require("ramda")
const parseInput = require("./inputParser/inputParser")
const calculateDriverTotals = require("./services/tripCalculator")
const generateReport = require("./reportGenerator/reportGenerator")

const file = process.argv.slice(2)[0]

fs.readFile(file, "utf8", (err, data) => {
  if (err) throw err

  R.pipe(parseInput, calculateDriverTotals, generateReport, console.log)(data)
})

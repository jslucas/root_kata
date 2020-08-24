const R = require("ramda")

const byDistance = R.descend(R.prop("distance"))

const toFormattedString = driver => {
  if (!driver.averageMph) {
    return `${driver.name}: 0 miles`
  }
  return `${driver.name}: ${Math.round(driver.distance)} miles @ ${Math.round(driver.averageMph)} mph`
}

const generateReport = drivers => {
  return R.sort(byDistance)(drivers).map(toFormattedString).join("\n")
}

module.exports = generateReport

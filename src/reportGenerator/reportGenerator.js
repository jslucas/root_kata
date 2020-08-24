const R = require("ramda")

const byDistance = R.descend(R.prop("distance"))

const generateReport = drivers => {
  const report = R.sort(byDistance)(drivers)
    .map(driver => {
      if (!driver.averageMph) {
        return `${driver.name}: 0 miles`
      }
      return `${driver.name}: ${Math.round(driver.distance)} miles @ ${Math.round(driver.averageMph)} mph`
    })
    .join("\n")

  return report
}

module.exports = generateReport

const generateReport = data => {
  const report = data
    .map(driver => `${driver.name}: ${Math.round(driver.distance)} miles @ ${Math.round(driver.averageMph)} mph`)
    .join("\n")
  return report
}

module.exports = generateReport

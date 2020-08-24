const generateReport = data => {
  const report = data
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

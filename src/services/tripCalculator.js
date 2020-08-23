const moment = require("moment")

const totalTripTime = (time, trip) => {
  return time + moment.duration(trip.end.diff(trip.start)).asMinutes() / 60
}

const calculateDriverTotals = drivers => {
  return drivers.map(driver => {
    const totalTimeDriven = driver.trips.reduce(totalTripTime, 0)
    return { name: driver.name, totalTimeDriven }
  })
}

module.exports = calculateDriverTotals

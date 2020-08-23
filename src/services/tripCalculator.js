const moment = require("moment")

const toTripTotals = (acc, trip) => {
  const time = acc.time + moment.duration(trip.end.diff(trip.start)).asMinutes() / 60
  const distance = acc.distance + trip.distance
  return { time, distance }
}

const calculateDriverTotals = drivers => {
  return drivers.map(driver => {
    const { time, distance } = driver.trips.reduce(toTripTotals, { time: 0, distance: 0 })
    return { name: driver.name, distance, time }
  })
}

module.exports = calculateDriverTotals

const moment = require("moment")

const toTripTotals = (acc, trip) => {
  const time = acc.time + moment.duration(trip.end.diff(trip.start)).asMinutes() / 60
  const distance = acc.distance + trip.distance
  return { time, distance }
}

const ineligibleTrip = trip => !(trip.distance / (moment.duration(trip.end.diff(trip.start)).asMinutes() / 60) < 5)

const calculateDriverTotals = drivers => {
  return drivers.map(driver => {
    const { time, distance } = driver.trips.filter(ineligibleTrip).reduce(toTripTotals, { time: 0, distance: 0 })
    const averageMph = distance && time ? distance / time : 0
    return { name: driver.name, distance, averageMph }
  })
}

module.exports = calculateDriverTotals

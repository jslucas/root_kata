const moment = require("moment")

const tripTime = trip => moment.duration(trip.end.diff(trip.start)).asMinutes() / 60

const toTripTotals = (acc, trip) => {
  const time = acc.time + tripTime(trip)
  const distance = acc.distance + trip.distance
  return { time, distance }
}

const ineligibleTrip = trip => !(trip.distance / tripTime(trip) < 5 || trip.distance / tripTime(trip) > 100)

const calculateDriverTotals = drivers => {
  return drivers.map(driver => {
    const { time, distance } = driver.trips.filter(ineligibleTrip).reduce(toTripTotals, { time: 0, distance: 0 })
    const averageMph = distance && time ? distance / time : 0
    return { name: driver.name, distance, averageMph }
  })
}

module.exports = calculateDriverTotals

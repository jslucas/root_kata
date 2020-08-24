const moment = require("moment")

const MIN_MPH = 5
const MAX_MPH = 100

const tripTime = trip => moment.duration(trip.end.diff(trip.start)).asMinutes() / 60

const toTripTotals = (acc, trip) => {
  const time = acc.time + tripTime(trip)
  const distance = acc.distance + trip.distance
  return { time, distance }
}

const isEligibleTrip = trip => !(trip.distance / tripTime(trip) < MIN_MPH || trip.distance / tripTime(trip) > MAX_MPH)

const toDriverWithTotals = driver => {
  const { time, distance } = driver.trips.filter(isEligibleTrip).reduce(toTripTotals, { time: 0, distance: 0 })
  const averageMph = distance && time ? distance / time : 0

  return { name: driver.name, distance, averageMph }
}

const calculateDriverTotals = drivers => drivers.map(toDriverWithTotals)

module.exports = calculateDriverTotals

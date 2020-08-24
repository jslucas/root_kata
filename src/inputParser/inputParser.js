const { toMoment } = require("../utils")

const isEmptyOrWhitespace = str => Boolean(str.trim())
const splitCommand = str => str.trim().split(/\s+/)

const parseDriverData = ([name]) => {
  return { name, trips: [] }
}

const parseTripData = ([driver, start, end, distance]) => {
  return {
    driver,
    start: toMoment(start),
    end: toMoment(end),
    distance: parseFloat(distance)
  }
}

const parseCommand = ([command, ...args]) => {
  switch (command) {
    case "Driver":
      return parseDriverData(args)
    case "Trip":
      return parseTripData(args)
    default:
      throw new Error(`Unable to parse command ${command} ${args}`)
  }
}

const assignTripsToDrivers = (drivers, driver, _, data) => {
  const isDriver = Boolean(driver.trips)

  if (isDriver) {
    const trips = data
      .filter(trip => trip.driver === driver.name)
      .map(trip => {
        let { driver, ...tripWithoutDriverProp } = trip
        return tripWithoutDriverProp
      })

    return [...drivers, { ...driver, trips }]
  }

  return drivers
}

const parseInput = input => {
  return input
    .split(/\n/)
    .filter(isEmptyOrWhitespace)
    .map(splitCommand)
    .map(parseCommand)
    .reduce(assignTripsToDrivers, [])
}

module.exports = parseInput

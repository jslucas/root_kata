const parseDriverData = ([name]) => {
  return { name, trips: [] }
}

const parseTripData = ([driver, start, end, distance]) => {
  return {
    driver,
    start,
    end,
    distance
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

const assignTripsToDrivers = (drivers, r, _, data) => {
  if (r.trips) {
    r.trips = data
      .filter(t => t.driver === r.name)
      .map(t => {
        let { driver, ...tripWithoutDriverProp } = t
        return tripWithoutDriverProp
      })
    drivers.push(r)
  }

  return drivers
}

const parseInput = input => {
  return input
    .split(/\n/)
    .filter(line => line.trim())
    .map(line => line.trim().split(/\s+/))
    .map(parseCommand)
    .reduce(assignTripsToDrivers, [])
}

module.exports = { parseInput }

const parseDriverData = ([name]) => {
  return { name }
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
  }
}

const parseInput = input => {
  return input
    .split(/\n/)
    .filter(line => line.trim())
    .map(line => line.trim().split(/\s+/))
    .map(parseCommand)
}

module.exports = { parseInput }

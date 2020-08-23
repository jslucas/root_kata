const parseDriverData = data => {
  return { name: data[1] }
}

const parseTripData = data => {
  return {
    driver: data[1],
    start: data[2],
    end: data[3],
    distance: data[4]
  }
}

const parseCommand = command => {
  switch (command[0]) {
    case "Driver":
      return parseDriverData(command)
    case "Trip":
      return parseTripData(command)
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

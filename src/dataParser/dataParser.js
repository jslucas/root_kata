const parseDriverData = data => {
  return { name: data[1] }
}

const parseInput = input => {
  return input
    .split(/\n/)
    .filter(line => line.trim())
    .map(line => line.trim().split(/\s+/))
    .map(parseDriverData)
}

module.exports = { parseInput }

const parseDriverData = data => {
  return { name: data[1] }
}

const parseInput = input => {
  return input
    .split(/\n/)
    .map(s => s.split(" "))
    .map(parseDriverData)
}

module.exports = { parseInput }

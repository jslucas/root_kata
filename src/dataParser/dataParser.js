const parseInput = input => {
  return input.split(/\n/).map(s => {
    return { name: s.split(" ")[1] }
  })
}

module.exports = { parseInput }

const { parseInput } = require("./dataParser")

describe("dataParser", () => {
  it("parses a driver", () => {
    const input = "Driver Dan"

    expect(parseInput(input)).toEqual([{ name: "Dan" }])
  })

  it("parses mutliple drivers", () => {
    const input = "Driver Dan\nDriver Lauren"

    expect(parseInput(input)).toEqual([{ name: "Dan" }, { name: "Lauren" }])
  })
})

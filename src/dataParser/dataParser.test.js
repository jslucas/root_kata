const { parseInput } = require("./dataParser")

describe("dataParser", () => {
  it("parses a driver", () => {
    const input = "Driver Dan"

    expect(parseInput(input)).toEqual({ name: "Dan" })
  })
})

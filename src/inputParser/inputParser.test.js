const { parseInput } = require("./inputParser")

describe("dataParser", () => {
  const expectedParsedData = [{ name: "Dan" }, { name: "Lauren" }]

  it("parses a driver", () => {
    const input = "Driver Dan"

    expect(parseInput(input)).toEqual([{ name: "Dan" }])
  })

  it("parses mutliple drivers", () => {
    const input = "Driver Dan\nDriver Lauren"

    expect(parseInput(input)).toEqual(expectedParsedData)
  })

  it("parses a trip", () => {
    const input = "Trip Dan 07:15 07:45 17.3\n"

    expect(parseInput(input)).toEqual([{ driver: "Dan", start: "07:15", end: "07:45", distance: "17.3" }])
  })

  it("parses input with extra whitespace", () => {
    const input = " Driver   Dan \n Driver   Lauren  "

    expect(parseInput(input)).toEqual(expectedParsedData)
  })

  it("parses input with CRLF newlines", () => {
    const input = "Driver Dan\r\nDriver Lauren\r\n"

    expect(parseInput(input)).toEqual(expectedParsedData)
  })

  it("throws an error for an unknown command", () => {
    expect(() => parseInput("nonsense")).toThrowError()
  })
})

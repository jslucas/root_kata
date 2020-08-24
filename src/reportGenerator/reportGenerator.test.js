const generateReport = require("./reportGenerator")

describe("reportGenerator", () => {
  it("logs formatted driver data", () => {
    const driver = { name: "Dan", distance: 39.1, averageMph: 46.92000000000001 }
    expect(generateReport([driver])).toEqual("Dan: 39 miles @ 47 mph")
  })
})

const generateReport = require("./reportGenerator")

describe("reportGenerator", () => {
  it("returns formatted driver data", () => {
    const driver = { name: "Dan", distance: 39.1, averageMph: 46.92000000000001 }
    expect(generateReport([driver])).toEqual("Dan: 39 miles @ 47 mph")
  })

  it("returns 0 miles, no mph for driver with no trips", () => {
    const driver = { name: "Dan", distance: 0, averageMph: 0 }
    expect(generateReport([driver])).toEqual("Dan: 0 miles")
  })
})

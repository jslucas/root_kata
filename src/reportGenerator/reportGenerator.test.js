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

  it("returns formatted report sorted by distance descending", () => {
    const drivers = [
      { name: "Dan", distance: 39.1, averageMph: 46.92000000000001 },
      { name: "Kumi", distance: 0, averageMph: 0 },
      { name: "Lauren", distance: 42, averageMph: 33.6 },
      { name: "Seven", distance: 44, averageMph: 55.46 },
      { name: "Case", distance: 256, averageMph: 99.6 }
    ]
    expect(generateReport(drivers)).toEqual(
      "Case: 256 miles @ 100 mph\nSeven: 44 miles @ 55 mph\nLauren: 42 miles @ 34 mph\nDan: 39 miles @ 47 mph\nKumi: 0 miles"
    )
  })
})

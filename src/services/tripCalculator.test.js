const calculateDriverTotals = require("./tripCalculator")
const { toMoment } = require("../utils")

describe("tripCalculator", () => {
  const driver = {
    name: "Dan",
    trips: [
      { start: toMoment("07:00"), end: toMoment("10:00"), distance: 30.3 },
      { start: toMoment("05:00"), end: toMoment("10:00"), distance: 350 }
    ]
  }

  const hikingTrip = { start: toMoment("06:20"), end: toMoment("9:55"), distance: 4.9 }
  const tripToSpace = { start: toMoment("01:05"), end: toMoment("1:07"), distance: 849760000 }

  it("totals the distance of a driver's trips", () => {
    expect(calculateDriverTotals([driver])).toEqual([{ name: "Dan", distance: 380.3, averageMph: 47.5375 }])
  })

  it("averages the overall speed", () => {
    expect(calculateDriverTotals([driver])).toEqual([{ name: "Dan", distance: 380.3, averageMph: 47.5375 }])
  })

  it("ignores trips that average < 5 mph", () => {
    const driverWithHikingTrip = { ...driver, trips: [hikingTrip, ...driver.trips] }

    expect(calculateDriverTotals([driverWithHikingTrip])).toEqual([
      { name: "Dan", distance: 380.3, averageMph: 47.5375 }
    ])
  })

  it("ignores trips that average > 100 mph", () => {
    const driverWithTripToSpace = { ...driver, trips: [tripToSpace, ...driver.trips] }
    expect(calculateDriverTotals([driverWithTripToSpace])).toEqual([
      { name: "Dan", distance: 380.3, averageMph: 47.5375 }
    ])
  })

  it("handles driver with only ineligible trips", () => {
    const driverWithNoEligibleTrips = { ...driver, trips: [hikingTrip, tripToSpace] }
    expect(calculateDriverTotals([driverWithNoEligibleTrips])).toEqual([{ name: "Dan", distance: 0, averageMph: 0 }])
  })

  it("doesn't explode if driver has no trips", () => {
    expect(calculateDriverTotals([{ name: "Dan", trips: [] }])).toEqual([{ name: "Dan", distance: 0, averageMph: 0 }])
  })
})

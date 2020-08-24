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
  const expectedDriver = { name: "Dan", distance: 380.3, averageMph: 47.5375 }

  const hikingTrip = { start: toMoment("06:20"), end: toMoment("9:55"), distance: 4.9 }
  const tripToSpace = { start: toMoment("01:05"), end: toMoment("1:07"), distance: 849760000 }

  it("calculates the total distance and avg mph of a driver's trips", () => {
    expect(calculateDriverTotals([driver])).toEqual([expectedDriver])
  })

  it("ignores trips that average < 5 mph", () => {
    const driverWithHikingTrip = { ...driver, trips: [hikingTrip, ...driver.trips] }

    expect(calculateDriverTotals([driverWithHikingTrip])).toEqual([expectedDriver])
  })

  it("ignores trips that average > 100 mph", () => {
    const driverWithTripToSpace = { ...driver, trips: [tripToSpace, ...driver.trips] }

    expect(calculateDriverTotals([driverWithTripToSpace])).toEqual([expectedDriver])
  })

  it("handles drivers with only ineligible trips", () => {
    const driverWithNoEligibleTrips = { ...driver, trips: [hikingTrip, tripToSpace] }

    expect(calculateDriverTotals([driverWithNoEligibleTrips])).toEqual([{ name: "Dan", distance: 0, averageMph: 0 }])
  })

  it("handles drivers with no trips", () => {
    expect(calculateDriverTotals([{ name: "Dan", trips: [] }])).toEqual([{ name: "Dan", distance: 0, averageMph: 0 }])
  })
})

const calculateDriverTotals = require("./tripCalculator")
const { toMoment } = require("../utils")

describe("tripCalculator", () => {
  const threeHoursAtTenPointOneMph = { start: toMoment("07:00"), end: toMoment("10:00"), distance: 30.3 }
  const fiveHoursAtSeventyMph = { start: toMoment("05:00"), end: toMoment("10:00"), distance: 350 }
  const hikingTrip = { start: toMoment("06:20"), end: toMoment("9:55"), distance: 4.9 }
  const driverDan = { name: "Dan", trips: [threeHoursAtTenPointOneMph, fiveHoursAtSeventyMph] }

  it("totals the distance of a driver's trips", () => {
    expect(calculateDriverTotals([driverDan])).toEqual([{ name: "Dan", distance: 380.3, averageMph: 47.5375 }])
  })

  it("averages the overall speed", () => {
    expect(calculateDriverTotals([driverDan])).toEqual([{ name: "Dan", distance: 380.3, averageMph: 47.5375 }])
  })

  it("ignores trips that average < 5 mph", () => {
    const driverDanWithHikingTrip = { ...driverDan, trips: [hikingTrip, ...driverDan.trips] }

    expect(calculateDriverTotals([driverDanWithHikingTrip])).toEqual([
      { name: "Dan", distance: 380.3, averageMph: 47.5375 }
    ])
  })

  it("doesn't explode if driver has no trips", () => {
    expect(calculateDriverTotals([{ name: "Dan", trips: [] }])).toEqual([{ name: "Dan", distance: 0, averageMph: 0 }])
  })
})

const calculateDriverTotals = require("./tripCalculator")
const { toMoment } = require("../utils")

describe("tripCalculator", () => {
  const threeHoursAtTenPointOneMph = { start: toMoment("07:00"), end: toMoment("10:00"), distance: 30.3 }
  const fiveHoursAtSeventyMph = { start: toMoment("05:00"), end: toMoment("10:00"), distance: 350 }
  const driverDan = { name: "Dan", trips: [threeHoursAtTenPointOneMph, fiveHoursAtSeventyMph] }

  it("totals the time for a driver's trips", () => {
    expect(calculateDriverTotals([driverDan])).toEqual([{ name: "Dan", distance: 380.3, time: 8.0 }])
  })

  it("totals the distance of a driver's trips", () => {
    expect(calculateDriverTotals([driverDan])).toEqual([{ name: "Dan", distance: 380.3, time: 8.0 }])
  })

  it("doesn't explode if driver has no trips", () => {
    expect(calculateDriverTotals([{ name: "Dan", trips: [] }])).toEqual([{ name: "Dan", distance: 0, time: 0 }])
  })
})

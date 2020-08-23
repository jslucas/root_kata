const moment = require("moment")

const toMoment = time => moment(time, "hh:mm")

module.exports = { toMoment }

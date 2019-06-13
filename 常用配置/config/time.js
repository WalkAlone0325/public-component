//  YYYY-MM-DD HH:mm:ss 字符串
const formatTimeFilter = function formatTime (date) {
  date = new Date(date)

  function _turnNum (num) {
    if (num < 10) return '0' + num
    return num
  }

  return date.getFullYear() + '-' +
    _turnNum(date.getMonth() + 1) + '-' +
    _turnNum(date.getDate()) + ' ' +
    _turnNum(date.getHours()) + ':' +
    _turnNum(date.getMinutes()) + ':' +
    _turnNum(date.getSeconds())
}
// 获取当前时间的开始时间
const getNowTimeFilter = function getNowTime () {
  let start = new Date(
    new Date(new Date().toLocaleDateString()).getTime()
  ) // 当天0点
  return start
}
/**
 * 获取本周、本季度、本月、上月的开始日期、结束日期
 */
var now = new Date() // 当前日期
var nowDayOfWeek = now.getDay() // 今天本周的第几天
var nowDay = now.getDate() // 当前日
var nowMonth = now.getMonth() // 当前月
var nowYear = now.getYear() // 当前年
nowYear += (nowYear < 2000) ? 1900 : 0 //

var lastMonthDate = new Date() // 上月日期
lastMonthDate.setDate(1)
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)
var lastYear = lastMonthDate.getYear()
var lastMonth = lastMonthDate.getMonth()
var timeEndtime = ' 23:59:59'
// 获取当前时间的结束时间
const getendTimeFilter = function getendTime () {
  let end = new Date( // 当天23:59
    new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1
  )
  return end
}

// 格式化日期：yyyy-MM-dd
function formatDate (date) {
  var myyear = date.getFullYear()
  var mymonth = date.getMonth() + 1
  var myweekday = date.getDate()

  if (mymonth < 10) {
    mymonth = '0' + mymonth
  }
  if (myweekday < 10) {
    myweekday = '0' + myweekday
  }
  return (myyear + '-' + mymonth + '-' + myweekday)
}

// 获得某月的天数
function getMonthDays (myMonth) {
  var monthStartDate = new Date(nowYear, myMonth, 1)
  var monthEndDate = new Date(nowYear, myMonth + 1, 1)
  var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24)
  return days
}

// 获得本季度的开始月份
function getQuarterStartMonth () {
  var quarterStartMonth = 0
  if (nowMonth < 3) {
    quarterStartMonth = 0
  }
  if (2 < nowMonth && nowMonth < 6) {
    quarterStartMonth = 3
  }
  if (5 < nowMonth && nowMonth < 9) {
    quarterStartMonth = 6
  }
  if (nowMonth > 8) {
    quarterStartMonth = 9
  }
  return quarterStartMonth
}

// 获得本周的开始日期
const getWeekStartDateFilter = function getWeekStartDate () {
  var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek)
  return formatDate(weekStartDate) + timeEndtime
}

// 获得本周的结束日期
const getWeekEndDateFilter = function getWeekEndDate () {
  var weekEndDate = new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek))
  return formatDate(weekEndDate) + timeEndtime
}
// 获得本月的开始日期
const getMonthStartDateFilter = function getMonthStartDate () {
  var monthStartDate = new Date(nowYear, nowMonth, 1)
  return formatTimeFilter(monthStartDate)
}

// 获得本月的结束日期
const getMonthEndDateFilter = function getMonthEndDate () {
  var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth))
  return formatDate(monthEndDate) + timeEndtime
}

// 获得本季度的开始日期
const getQuarterStartDateFilter = function getQuarterStartDate () {

  var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1)
  return formatTimeFilter(quarterStartDate)
}

// 或的本季度的结束日期
const getQuarterEndDateFilter = function getQuarterEndDate () {
  var quarterEndMonth = getQuarterStartMonth() + 2
  var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth))
  return formatDate(quarterStartDate) + timeEndtime
}

// 获得本年的开始日期
const getYearStartDateFilter = function getYearStartDate (index) {
  // 获得当前年份4位年
  var currentYear = now.getFullYear() - index
  // 本年第一天
  var currentYearFirstDate = new Date(currentYear, 0, 1)
  return formatTimeFilter(currentYearFirstDate)
}

// 获得本年的结束日期
const getYearEndDateFilter = function getYearEndDate (index) {
  // 获得当前年份4位年
  var currentYear = now.getFullYear() - index
  // 本年最后
  var currentYearLastDate = new Date(currentYear, 11, 31)
  return formatDate(currentYearLastDate) + timeEndtime
}

const getAllTimeFilter = function getAllTime () {

  // 获得上月开始时间
  function getLastMonthStartDate () {
    var lastMonthStartDate = new Date(nowYear, lastMonth, 1)
    return formatTimeFilter(lastMonthStartDate)
  }

  // 获得上月结束时间
  function getLastMonthEndDate () {
    var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth))
    return formatTimeFilter(lastMonthEndDate)
  }

}

export {
  getWeekStartDateFilter,
  formatTimeFilter,
  getNowTimeFilter,
  getendTimeFilter,
  getAllTimeFilter,
  getWeekEndDateFilter,
  getMonthStartDateFilter,
  getMonthEndDateFilter,
  getQuarterStartDateFilter,
  getQuarterEndDateFilter,
  getYearStartDateFilter,
  getYearEndDateFilter

}

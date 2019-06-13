/**
 * 前端处理Unicode编码的格式
 *
 */

// 转为unicode 编码
function encodeUnicode (str) {
  var res = []
  for (var i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4)
  }
  return '\\u' + res.join('\\u')
}

// 解码
function decodeUnicode (str) {
  str = str.replace(/\\/g, '%')
  return unescape(str)
}

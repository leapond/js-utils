const toStr = Object.prototype.toString
const mergeTypes = {'[object Object]': 1, '[object Array]': 2, '[object Set]': 3, '[object Map]': 4}

function getMergeType(target) {
  return mergeTypes[toStr.call(target)]
}

export {toStr, getMergeType}
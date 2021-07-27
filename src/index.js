const toStr = Object.prototype.toString
const mergeTypes = {'[object Object]': 1, '[object Array]': 2, '[object Set]': 3, '[object Map]': 4}

function getMergeType(target) {
  return target &&
      typeof target === 'object' &&
      mergeTypes[toStr.call(target)] ||
      0
}

export {toStr, getMergeType}
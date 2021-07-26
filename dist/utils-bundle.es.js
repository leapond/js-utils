var toStr = Object.prototype.toString;
var mergeTypes = {'[object Object]': 1, '[object Array]': 2, '[object Set]': 3, '[object Map]': 4};

function getMergeType(target) {
  return target &&
      typeof target === 'object' &&
      // make Leapond Classes not be copy/merged
      !('CID' in target) &&
      mergeTypes[toStr.call(target)] ||
      0
}

export { getMergeType, toStr };
//# sourceMappingURL=utils-bundle.es.js.map

import {getMergeType, toStr} from "./index";

test('toStr()', ()=>{
  expect(toStr.call({})).toBe('[object Object]')
})

test('mergeTypes', ()=>{
  expect(getMergeType()).toBe(0)
  expect(getMergeType(1)).toBe(0)
  expect(getMergeType(NaN)).toBe(0)
  expect(getMergeType({})).toBe(1)
  expect(getMergeType([])).toBe(2)
  expect(getMergeType(new Set)).toBe(3)
  expect(getMergeType(new Map)).toBe(4)
})
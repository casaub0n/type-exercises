import {
  isPositive,
  showUserInfo,
  sumOfPos,
  myFilter,
  isPositiveFunc,
  getSpeed
} from './index'

test('数値を受け取ってそれが0以上ならtrueになるか', () => {
  expect(isPositive(3)).toBe(true)
})

const personA = { name: 'B', age: 18, private_: false }

test('オブジェクトの型でUserが持てるか', () => {
  expect(showUserInfo(personA)).toBe('B')
})

test('数値を受け取ってそれが0以上ならtrue、0未満ならfalse', () => {
  expect(isPositiveFunc(5)).toBe(true)
  expect(isPositiveFunc(-1)).toBe(false)
})

test('数値の配列を受け取って、その0以上の値の和の値を返す関数', () => {
  expect(sumOfPos([1, 3, -2, 0])).toBe(4)
})

test('配列の中で2の倍数のみの配列を作る関数', () => {
  expect(myFilter([1, 2, 3, 4, 5], num => num % 2 === 0)).toEqual([2, 4])
})

test('決められたスピードのときに決められた速度が返される', () => {
  expect(getSpeed('slow')).toBe(10)
  expect(getSpeed('medium')).toBe(50)
  expect(getSpeed('fast')).toBe(200)
})

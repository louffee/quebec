import { flattenArray } from '../packages/quebec/src'

describe('flattenArray util', () => {
  it('should flatten an array of arrays', () => {
    expect(
      flattenArray([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  it('should flatten an array of arrays with nested arrays', () => {
    expect(
      flattenArray<number | number[], number[]>([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [
          [10, 11, 12],
          [13, 14, 15],
        ],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  })
  it('should flatten an array of arrays with nested arrays and objects', () => {
    expect(
      flattenArray<
        | number
        | number[]
        | {
            [K in 'a' | 'b' | 'c']: number
          },
        any[]
      >([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [
          [10, 11, 12],
          [13, 14, 15],
        ],
        [{ a: 1, b: 2, c: 3 }],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, { a: 1, b: 2, c: 3 }])
  })
})

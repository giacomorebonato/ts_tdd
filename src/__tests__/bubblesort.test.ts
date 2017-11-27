import bubblesort from '../bubblesort'

it('keeps an ordered array', () => {
  expect([2, 4, 5, 6]).toEqual([2, 4, 5, 6])
})

it('orders a 2n array', () => {
  expect(bubblesort([2, 1])).toEqual([1, 2])
})

it('orders a xn array', () => {
  expect([9, 8, 7, 6, 5])
})

it('sorts an 100n random array', () => {
  const arr = []

  for (let i = 0; i < 100; i++) {
    arr.push(Math.round(Math.random() * 1000))
  }

  const sorted = arr.sort((a, b) => a - b )

  expect(bubblesort(arr)).toEqual(sorted)
})

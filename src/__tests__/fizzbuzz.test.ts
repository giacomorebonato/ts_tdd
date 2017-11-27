import fizzbuzz from '../fizzbuzz'

it('prints fizz for multiple of 3', () => {
  expect(fizzbuzz.print(6)).toEqual('fizz')
})

it('prints buzz from multiple of 5', () => {
  expect(fizzbuzz.print(10)).toEqual('buzz')
})

it('prints fizzbuzz for multiple of 3 and 5', () => {
  expect(fizzbuzz.print(15)).toEqual('fizzbuzz')
})

it('prints empty strings if neither multiple of 3 or 5', () => {
  expect(fizzbuzz.print(8)).toEqual('')
})

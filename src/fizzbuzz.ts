let fizzbuzz = {
  print: (n: number) => {
    let text = ''

    if (n % 3 === 0) {
      text += 'fizz'
    }

    if (n % 5 === 0) {
      text += 'buzz'
    }

    return text
  }
}

export default fizzbuzz

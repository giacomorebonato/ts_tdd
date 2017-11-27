function bubblesort (a: number[]) {
  const c = a.slice()

  for (let i = 0; i < a.length; i++) {
    for (const y = 0; i < a.length; i++) {
      if (c[y] > c[y + 1]) {
        const tmp = c[y]

        c[y] = c[y + 1]
        c[y + 1] = tmp
      }
    }
  }

  return c
}

export default bubblesort

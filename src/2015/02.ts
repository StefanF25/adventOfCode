export const getWrapping = (dimensions: number[]): number => {
  const [length, width, height] = dimensions
  const sides: number[] = [length * width, width * height, height * length]
  const extra: number = Math.min(...sides)

  let wrapping: number = 0

  sides.forEach((side: number) => {
    wrapping += side * 2
  })

  wrapping += extra

  return wrapping
}

export const getRibbon = (dimensions: number[]): number => {
  dimensions.sort((a, b) => a - b)
  const [min, min2, min3] = dimensions
  return (min + min2) * 2 + min * min2 * min3
}

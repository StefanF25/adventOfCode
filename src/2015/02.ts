import {readFileSync} from 'fs'

const input: string = readFileSync('./inputs/02.txt', 'utf-8')

const getWrapping = (dimensions: number[]): number => {
    const [length, width, height] = dimensions
    const sides: number[] = [length * width, width * height, height * length];
    const extra: number = Math.min(...sides)

    let wrapping: number = 0

    sides.forEach((side: number) => {
        wrapping += side * 2
    })

    wrapping += extra

    return wrapping
}

const getRibbon = (dimensions: number[]): number => {
    dimensions.sort((a, b) => a - b)
    const [min, min2, min3] = dimensions
    return (min + min2) * 2 + (min * min2 * min3)
}

// Examples
console.log('Example 1 (2x3x4)')
console.log(getWrapping([2, 3, 4]) + ' (expected 58)')
console.log(getRibbon([2, 3, 4]) + ' (expected 34)')
console.log('Example 2 (1x1x10)')
console.log(getWrapping([1, 1, 10]) + ' (expected 43)')
console.log(getRibbon([1, 1, 10]) + ' (expected 14)')

let totalWrapping: number = 0
let totalRibbon: number = 0

for (const line of input.split("\n")) {
    if (line.length > 0) {
        const dimensions: number[] = line.split("x").map(dim => parseInt(dim))
        totalWrapping += getWrapping(dimensions)
        totalRibbon += getRibbon(dimensions)
    }
}

console.log(`The total wrapping needed is ${totalWrapping} square feet`)
console.log(`The total ribbon needed is ${totalRibbon} feet`)

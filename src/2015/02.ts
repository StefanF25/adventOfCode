import getInputFile from "../util/importTxtFile.ts"

const input: string = getInputFile(import.meta.url, './inputs/02.txt')

export const getWrapping = (dimensions: number[]): number => {
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

export const getRibbon = (dimensions: number[]): number => {
    dimensions.sort((a, b) => a - b)
    const [min, min2, min3] = dimensions
    return (min + min2) * 2 + (min * min2 * min3)
}

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

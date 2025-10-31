import { readFileSync } from 'fs'

const input: string = readFileSync('./inputs/02.txt', 'utf-8')

const getWrapping: (length: number, width: number, height: number) => number = (length: number, width: number, height: number): number => {
    const sides: number[] = [length * width, width * height, height * length];
    const extra: number = Math.min(...sides)

    let wrapping: number = 0

    sides.forEach((side: number) => {
        wrapping += side * 2
    })

    wrapping += extra

    return wrapping
}

let total: number = 0

for (const line of input.split("\n")) {
    if (line.length > 0) {
        const [l, w, h] = line.split("x")
        total += getWrapping(+l, +w, +h)
    }
}

console.log(`The total wrapping needed is ${total} square feet`)

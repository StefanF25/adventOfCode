import { readFileSync } from 'fs'

// Counts 2 extra steps because of newline at end of file
const input: string = readFileSync('./inputs/01.txt', 'utf-8')

const findLevel: (input: string, goalLevel?: number) => void = (input: string, goalLevel: number = undefined): void => {
    let currentLevel: number = 0
    let currentStep: number = 0

    for (const char of input) {
        currentStep++
        if (char === "(") {
            currentLevel++
        } else if (char === ")") {
            currentLevel--
        }
        if (currentLevel === goalLevel) {
            break
        }
    }

    console.log(`Santa arrives at level ${currentLevel} at step ${currentStep}`)
}

findLevel(input)
findLevel(input, -1)

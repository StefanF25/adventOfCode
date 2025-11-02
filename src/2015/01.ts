import getInputFile from "../util/importTxtFile.ts";

const input: string = getInputFile(import.meta.url, './inputs/01.txt')

export const findLevel = (input: string, goalLevel: number | undefined = undefined): number => {
    let currentLevel: number = 0, currentStep: number = 0

    for (const char of input) {
        currentStep++
        switch (char) {
            case "(":
                currentLevel++
                break
            case ")":
                currentLevel--
                break
            default:
                // reduces step on empty input
                currentStep--
        }
        // loop breaks at goal
        if (currentLevel === goalLevel) break
    }

    console.log(`Santa arrives at level ${currentLevel} at step ${currentStep}`)
    return currentLevel
}

findLevel(input)
findLevel(input, -1)
